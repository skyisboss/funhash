<template>
    <div class="__wrap">
        <div class="header">
            <div class="ui-flex ui-items-center ui-h-full ui-p-4">
                <ui-icon-button color="secondary" icon="keyboard_backspace" @click="handleExpand('chat')"/>
                <div class="!ui-flex ui-flex-1 ui-justify-between ui-items-center">
                    <span class="ui-ml-2">
                        聊天室 (888)
                    </span>
                    <ui-icon-button color="secondary" icon="info"/>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="ui-p-2">
                <div class="ui-flex ui-space-x-2 ui-mb-4" v-for="x in 50">
                    <div class="avatar ui-w-12 ui-h-12 ui-rounded-full ui-bg-gray-300"></div>
                    <div class="content ui-flex ui-flex-col ui-px-2 ui-py-1 ui-flex-1 ui-bg-slate-100 ui-rounded-lg">
                        <div>username</div>
                        <div>{{x}} == contentcontentcontent</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer ui-p-4">
            <div class="ui-flex ui-h-full ui-items-center">
                <input class="ui-flex ui-flex-1"/>
                <ui-icon-button icon="send" color="primary" size="large" class="!ui-ml-3"/>
            </div>
        </div>
    </div>

    
</template>

<script setup lang="ts">
import { ref, inject, onMounted,nextTick } from "vue"
const handleExpand = inject('expand') as (key: string)=>void

</script>

<style lang="scss" scoped>
    .footer{
        height: 80px;
        position: relative;
        input {
            outline: 0;
            padding: 0 16px;
            background-color: var(--layout-color);
            border-radius: 50px;
            width: 100%;
            height: 100%;
            &:focus {
                border-width: 1px;
                border-color: var(--primary-color);
            }
        }
        .emoji{
            position: absolute;
            right: 10px;
            bottom: 0;
            top: 5px;
            background-color: transparent !important;
        }
    }
</style>