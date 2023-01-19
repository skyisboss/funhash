<template>
    <div class="ui-layout ui-flex=ui-flex-col ui-relative"
        :style="vh"
        :class="[
            {'expand-menu': expand.menu},
            {'expand-chat': expand.chat},
            screen.width < 640 ? 'mobile' : null,
        ]">
        <aside class="menu">
            <AsideVue/>
        </aside>
        <aside class="chat">
            <ChatVue />    
        </aside>
        <header>
            <HeaderVue/>
        </header>
        <main>
            <MainVue />
            <FooterVue class="footer"/>
        </main>
    </div>
    <LoginModal ref="loginModal"/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, provide } from "vue";
import HeaderVue from "./Header.vue";
import AsideVue from "./Aside.vue";
import MainVue from "./Main.vue";
import ChatVue from "./Chat.vue";
import FooterVue from "./Footer.vue";
import LoginModal from "./modal/Login.vue"

const expand = ref({
    menu: false,
    chat: false,
})

// 修复滚动条穿透
function flexScroll(){
    const el = document.querySelector('main')
    if (isMobile() && el) {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if (el.classList.value == '') {
            el.classList.add('fixed')
            el.style.cssText += 'top:-' + scrollTop + 'px;'
        } else {
            el.classList.remove('fixed')
            el.style.cssText = ''
            el.scrollTop = document.documentElement.scrollTop = -parseInt(el.style.top)
        }
    }
}
provide('expand',(key: 'menu' | 'chat')=> {
    expand.value[key] = !expand.value[key];
    flexScroll()
})

const loginModal = ref()
provide('login',(key: 'login' | 'register')=>loginModal.value.open(key))

const screen = ref({ width: 0, height: 0, scrollTop: 0 })
const vh = ref('')
// 设置屏幕高度
const setVh = ()=> vh.value = isMobile() ? `--vh: ${window.innerHeight/100}px` : ''

function setScreen(){
    screen.value.width = document.body.clientWidth
    screen.value.height = document.body.clientHeight
}
onMounted(() => {
    setScreen()
    setVh()
    window.onresize = () => {
        setScreen()
        setVh()
    } 
})
function isMobile() {
    let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag !== null;
}
provide('isMobile', isMobile())
</script>

<style>
:root {
    --cubic-bezier: all .2s linear;
    --overflow-hidden: hidden;
}
.text-secondary{
    color: #18a058 !important;
}
.bg-secondary{
    background-color: rgba(24, 160, 88, 0.16) !important;
}
.bg-gray-white{
    background-color: var(--secondary-color) !important;
}
.text-primary{
    color: var(--primary-color) !important;
}
.text-grey-blue{
    color: var(--blue-grey-color) !important;
}
.bg-grey-blue{
    background-color: var(--blue-grey-color) !important;
}


/* html, body, #app {
    overflow: var(--overflow-hidden);
} */
</style>
<style lang="scss" scoped>
.ui-layout{
    $header-height: 56px;
    $aside-width: 256px;
    $aside-chat-width: 356px;
    --header-height: #{$header-height};
    --aside-width: #{$aside-width};
    --aside-chat-width: #{$aside-chat-width};
    --layout-color: #eff4ff;
    --layout-header-color: #ffffffb8;
    --transition: 0.26s linear; 
    --aside-menu-color: #fff;
    --aside-chat-color: #fff;
    --primary-color: #35c31e;
    --primary-text-color: #557086;
    --secondary-color: #dde9ff;
    --secondary-text-color: #dde9ff;
    --blue-grey-color: #78909c;
    // --transition: 0.36s cubic-bezier(0.4, 0, 0.2, 1); 
    background-color: var(--layout-color);
    height: 100%;

    header{
        z-index: 15;
        position: fixed;
        background-color: var(--layout-header-color);
        backdrop-filter: blur(20px);
        box-shadow: inset 0px -1px 1px #e7ebf0;
        left: 0px;
        right: 0px;
        transition: var(--transition);
        > div {
            height: $header-height;
        }
        .menu-btn {
            transform: translate3d(0,0,0);
        }
        @at-root #{'.expand-menu' + &} {
            left: $aside-width;
            @at-root #{'.mobile' + &} {
                left: 0;
            }
        }
        @at-root #{'.expand-chat' + &} {
            right: $aside-chat-width;
            @at-root #{'.mobile' + &} {
                right: 0;
            }
        }
    }
    aside{
        z-index: 15;
        height: 100vh;
        top: 0px;
        transition: var(--transition);
        position: fixed;
        border-right: 1px solid #e7ebf0;
        :deep(.__wrap){
            height: 100%;
            display: flex;
            flex-direction: column;
            .header{
                height: var(--header-height);
            }
            .content{
                flex: 1;
                overflow: auto;
            }
            @at-root #{'.mobile' + &} {
                height: calc(var(--vh, 1vh) * 100);
            }
        }
        &.menu {
            width: $aside-width;
            transform: translate3d(-100%,0,0);
            background-color: var(--aside-menu-color);
            :deep(.aside-top){
                height: var(--header-height);
            }
            :deep(.aside-main){
                height: calc(100% - var(--header-height));
            }
            @at-root #{'.expand-menu' + &} {
                transform: translate3d(0%,0,0);
                @at-root #{'.mobile' + &} {
                    width: 100%;
                    z-index: 999;
                }
            }
        }
        &.chat {
            right: 0;
            width: $aside-chat-width;
            transform: translate3d(100%,0,0);
            background-color: var(--aside-chat-color);
            @at-root #{'.expand-chat' + &} {
                transform: translate3d(0%,0,0);
                @at-root #{'.mobile' + &} {
                    width: 100%;
                    z-index: 999;
                }
            }
        }
    }
    main{
        padding: $header-height 0px 0px 0;
        z-index: 10;
        max-width: 100%;
        transition: var(--transition);
        background-color: var(--layout-color);
        &.fixed{
            position: fixed;
            left: 0;
            right: 0;
        }
        @at-root #{'.expand-menu' + &} {
            padding: $header-height 0px 0px $aside-width;
        }
        @at-root #{'.expand-chat' + &} {
            padding: $header-height $aside-chat-width 0px 0px;
        }
        @at-root #{'.expand-chat.expand-menu' + &} {
            padding: $header-height $aside-chat-width 0px $aside-width;
        }
        @at-root #{'.mobile' + &} {
            // overflow: hidden;
            padding: $header-height 0px 0px 0;
            // height: 100vh;
        }
    }

    :deep(.game-wrap){
        @keyframes shake { /* 水平抖动，核心代码 */
            10%, 90% { transform: translate3d(-9px, +9px, 0); }
            20%, 80% { transform: translate3d(+6px, -2px, 0); }
            30%, 70% { transform: translate3d(-8px, -10px, 0); }
            40%, 60% { transform: translate3d(+10px, +12px, 0); }
            50% { transform: translate3d(-4px, 0, 0); }
        }
        .shake {
            animation: .5s shake linear infinite;
        }
    }
}
.ui-icon-button, .ui-icon-button .ui-icon-button__focus-ring {
    height: 2.4rem;
    width: 2.4rem;
}
</style>
