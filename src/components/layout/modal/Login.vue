<template>
    <ui-modal 
        transition="scale-up" 
        :size="isMobile ? 'fullscreen' : 'normal'" 
        ref="loginModal" 
        :modalClass="isMobile ? '' : '!ui-rounded-2xl !ui-w-96'"
    >
        <template #header>
            <div class="ui-w-full ui-text-center">
                <ui-button 
                class="!ui-rounded-l-full" 
                :class="tab == 'login' ? 'bg-secondary text-secondary' : null"
                @click="tab = 'login'"
                >登录</ui-button>
                <ui-button 
                    class="!ui-rounded-r-full" 
                    :class="tab == 'reg' ? 'bg-secondary text-secondary' : null"
                    @click="tab = 'reg'"
                >注册</ui-button>
            </div>
        </template>
        <div style="min-height: 300px;">
            <div class="login-wrap" v-if="tab == 'login'">
                <div class="ui-text-xl ui-mb-8 ui-mt-5">欢迎回来</div>
                <ui-autocomplete
                    floating-label
                    label="请输入邮箱"
                    name="favourite_month"
                    placeholder="Enter your favourite month"
                ></ui-autocomplete>
                <ui-autocomplete
                    floating-label
                    label="请输入密码"
                    name="favourite_month"
                    placeholder="Enter your favourite month"
                ></ui-autocomplete>
                <ui-button class="!ui-rounded-full ui-w-full ui-mt-10" color="primary">登录</ui-button>
            </div>
            <div class="login-wrap" v-else>
                <div class="ui-text-xl ui-mb-8 ui-mt-5">注册您的账号</div>
                <ui-autocomplete
                    floating-label
                    label="请输入邮箱"
                    name="favourite_month"
                    placeholder="Enter your favourite month"
                ></ui-autocomplete>
                <ui-autocomplete
                    floating-label
                    label="请输入密码"
                    name="favourite_month"
                    placeholder="Enter your favourite month"
                ></ui-autocomplete>
                <ui-autocomplete
                    floating-label
                    label="再次输入密码"
                    name="favourite_month"
                    placeholder="Enter your favourite month"
                ></ui-autocomplete>
                <ui-checkbox v-model="tab">我同意使用条款 & 并且已满18岁</ui-checkbox>
                <ui-button class="!ui-rounded-full ui-w-full ui-mt-10" color="primary">注册</ui-button>
            </div>

            <div class="ui-mt-6 ui-space-y-4">
                <div class="ui-text-center">使用以下方式直接登录</div>
                <div class="ui-flex ui-justify-evenly">
                    <ui-icon-button icon="menu_open"/>
                    <ui-icon-button icon="menu_open"/>
                    <ui-icon-button icon="menu_open"/>
                    <ui-icon-button icon="menu_open"/>
                </div>
            </div>
        </div>
    </ui-modal>
</template>

<script setup lang="ts">
import { ref, inject } from "vue"
const loginModal = ref()

const tab = ref('login')
const open = (key: string)=>{
    tab.value = key
    loginModal.value.open()
}

defineExpose({
    open
})

const isMobile = inject('isMobile') as boolean


</script>

<style lang="scss" scoped>
.login-wrap--transition-scale-up-enter-from,
.login-wrap--transition-scale-up-leave-active {
    opacity: 0;

    .ui-modal__container {
        transform: scale(0.8);
    }
}
</style>