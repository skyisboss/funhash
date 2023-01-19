<template>
    <div class="ui-flex ui-items-center ui-px-4">
        <div class="ui-flex ui-flex-1 ui-items-center ui-w-full lt-toolbar">
            <ui-icon-button icon="menu_open" class="menu-btn" @click="handleExpand('menu')"/>
            <router-link to="/">
                <ui-icon-button class="!ui-h-8 !ui-w-8 !ui-ml-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 232">
                        <g data-v-243d8871="">
                            <path d="M116.034,0C52.053,0,0,52.053,0,116.034s52.053,116.034,116.033,116.034c63.981,0,116.034-52.053,116.034-116.034
                                S180.015,0,116.034,0z M106.701,9.034h18v18h-18V9.034z M197.07,116.034c0,44.684-36.353,81.036-81.036,81.036
                                c-44.683,0-81.035-36.353-81.035-81.036s36.353-81.036,81.035-81.036C160.717,34.998,197.07,71.351,197.07,116.034z M46.738,34.01
                                l12.728,12.728L46.738,59.466L34.01,46.738L46.738,34.01z M26.701,125.034h-18v-18h18V125.034z M46.738,198.059L34.01,185.331
                                l12.728-12.728l12.728,12.728L46.738,198.059z M124.701,223.034h-18v-18h18V223.034z M185.33,198.059l-12.728-12.728l12.728-12.728
                                l12.728,12.728L185.33,198.059z M185.33,59.466l-12.728-12.728L185.33,34.01l12.728,12.728L185.33,59.466z M204.701,125.034v-18h18
                                v18H204.701z">
                            </path>
                            <path d="M49.999,116.034c0,36.412,29.623,66.036,66.035,66.036s66.036-29.624,66.036-66.036s-29.624-66.036-66.036-66.036
                                S49.999,79.622,49.999,116.034z M147.61,110.436c3.115,5.066,4.119,9.572,4.119,14.925c0,13.23-9.336,20.343-19.95,20.343
                                c-7.24,0-11.363-3.421-13.612-6.267l3.838,13.597h-12.064l3.753-13.285c-2.319,2.76-6.379,6.221-13.355,6.221
                                c-10.614,0-20.001-7.245-20.001-20.476c0-5.354,0.979-9.993,4.093-15.059c4.856-7.901,31.673-30.643,31.673-30.643
                                S142.754,102.535,147.61,110.436z">
                            </path>
                        </g>
                    </svg>
                </ui-icon-button>
            </router-link>
        </div>
        <div class="ui-flex ui-items-center">
            <ui-button class="!ui-rounded-full" color="primary" @click="handleModal('login')">
                <span class="ui-px-2">登录 / 注册</span>
            </ui-button>

            <!-- <ui-button class="!ui-rounded-l-full bg-secondary text-secondary" @click="handleModal('register')">注册</ui-button> -->
            <!-- <ui-button class="!ui-rounded-r-full bg-secondary text-secondary" @click="handleModal('login')">登录</ui-button> -->
            
            <div class="relative ui-ml-6 chat-btn" @click="handleExpand('chat')">
                <ui-icon-button color="secondary" icon="question_answer" />
                <ui-badge label="16"/>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { ref,inject } from "vue"

const handleExpand = inject('expand') as (key: string)=>void
const handleModal = inject('login') as (key: string)=>void
</script>


<style>
.chat-btn{
    /* transition: var(--transition); */
    display: block;
}
.expand-chat .chat-btn{
    /* transform: translate3d(72px, 0px, 0px); */
    display: none;
}
</style>
<style lang="scss" scoped>

.lt-toolbar{
    transform: translate3d(0,0,0);
    transition: var(--cubic-bezier);
    .menu-btn {
        transform: rotate(180deg);
    }
}
.side-expand {
    .lt-toolbar {
        transform: translate3d(-36px,0,0);
    }
    .menu-btn {
        transform: rotate(0deg)
    }
}
</style>