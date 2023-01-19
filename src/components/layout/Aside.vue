<template>
    <div class="__wrap">
        <div class="header">
            <div class="ui-flex ui-items-center ui-h-full ui-px-4">
                <ui-icon-button class="!ui-flex md:!ui-hidden" color="secondary" icon="keyboard_backspace" @click="handleExpand('menu')"/>
                <div class="ui-flex ui-flex-1 ui-justify-center">
                    <ui-button class="!ui-rounded-l-full" color="primary">
                        <ui-icon icon="sports_esports"/>
                        <span class="ui-ml-2">游戏</span>
                    </ui-button>
                    <ui-button class="!ui-rounded-r-full bg-secondary text-secondary">
                        <ui-icon icon="sports_basketball" />
                        <span class="ui-ml-2">体育</span>
                    </ui-button>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="ui-grid ui-grid-cols-3 ui-gap-2 ui-p-4 !ui-pb-0">
                <div class="ui-py-4" v-for="x in 6">福利{{x}}</div>
            </div>
            <ui-menu has-icons :options="menuOptions" class="!ui-overflow-hidden"></ui-menu>
        </div>
        <div class="footer">
            <div class="ui-p-4">
                <ui-button class="!ui-rounded-l-full bg-secondary text-secondary">
                    <ui-icon icon="light_mode"/>
                </ui-button>
                <ui-button class="!ui-rounded-r-full">
                    <ui-icon icon="dark_mode"/>
                </ui-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue"

const handleExpand = inject('expand') as (key: string)=>void
const menuOptions = [
    {
        type: 'divider'
    },
    {
        id: 'edit',
        label: '首页',
        icon: 'home',
        secondaryText: 'Ctrl+E'
    },
    {
        id: 'edit',
        label: '热门游戏',
        icon: 'home',
        secondaryText: 'Ctrl+E'
    },
    {
        id: 'edit',
        label: '最近玩过',
        icon: 'home',
        secondaryText: 'Ctrl+E'
    },
    {
        type: 'divider'
    },
    {
        id: 'duplicate',
        label: '新人福利',
        icon: 'content_copy',
        secondaryText: 'Ctrl+D'
    },
    {
        id: 'share',
        label: 'VIP专享',
        icon: 'share',
        secondaryText: 'Ctrl+Shift+S',
    },
    {
        id: 'share',
        label: '邀请有奖',
        icon: 'share',
        secondaryText: 'Ctrl+Shift+S',
    },
    {
        type: 'divider'
    },
    {
        id: 'delete',
        label: '区块链知识',
        icon: 'delete',
        secondaryText: 'Del'
    },
    {
        id: 'delete',
        label: '公平性游戏',
        icon: 'delete',
        secondaryText: 'Del'
    }
];

const emit = defineEmits(['expand-close'])
const handleExpandClose = ()=>emit('expand-close')
</script>

<style lang="scss" scoped>
</style>