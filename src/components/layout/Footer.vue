<template>
    <div class="footer">
        <PageContainer>
            <div class="ui-w-full">
                <h2 class="ui-text-xl ui-text-center">公平和透明是如此重要</h2>
                <p class="ui-text-sm ui-mt-4 ui-mb-2">顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！致力于为玩家提供最好的区块链游戏！致力于为玩家提供最好的区块链游戏！顶级哈希是一个基于区块链和加密货币的在线游戏，致力于为玩家提供最好的区块链游戏！</p>
                <div class="ui-text-center">
                    <ui-button type="secondary" color="primary">查看更多</ui-button>
                </div>
            </div>
            <div class="ui-border-b ui-mt-4 ui-mb-8"></div>
            <div class="ui-w-full ui-flex ui-flex-col md:ui-flex-row md:ui-grid ui-grid-cols-3 ui-gap-16">
                <div class="ui-col-span-2">
                    <div class="ui-flex ui-flex-col ui-space-y-4">
                        <h2 class="ui-text-center md:ui-text-left">致力于打造最公平的区块链娱乐</h2>
                        <div class="ui-grid ui-grid-cols-4 md:ui-grid-cols-8 ui-gap-2 ui-items-center ">
                            <img src="@/assets/svg/18p.svg" alt="" />
                            <img src="@/assets/svg/bitcoin.svg" alt="" />
                            <img src="@/assets/svg/ethereum.svg" alt="" />
                            <img src="@/assets/svg/ripple.svg" alt="" />
                            <img src="@/assets/svg/tron.svg" alt="" />
                            <img src="@/assets/svg/tron.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="ui-rounded-2xl ui-p-4 ui-flex ui-flex-col ui-items-center ui-justify-center" style="background: var(--layout-color)">
                    <div>需要帮助任何帮助？从这里联系我们</div>
                    <div>
                        Telegram WhatsApp Facebook Twitter
                    </div>
                </div>
            </div>
            <div class="ui-border-b ui-mt-8 ui-mb-4"></div>
            <div class="ui-flex ui-flex-col md:ui-flex-row">
                <ul class="ui-grid ui-grid-cols-3 md:ui-grid-cols-5 ui-gap-5">
                    <li><a href="#">隐私政策</a></li>
                    <li><a href="#">服务条款</a></li>
                    <li><a href="#">促销活动</a></li>
                    <li><a href="#">会员计划</a></li>
                    <li><a href="#">常见问题</a></li>
                </ul>
                <div class="ui-flex-1 ui-flex ui-justify-center md:ui-justify-end ui-mb-6 ui-mt-6 md:ui-mt-0">Copyright © 2022 TopHash</div>
            </div>
        </PageContainer>
    </div>
</template>

<script setup lang="ts">
import {  } from "vue"
import PageContainer from "./PageContainer.vue";
</script>

<style lang="scss" scoped>
.footer {
    background-color: var(--layout-footer-color, #fff);
    position: relative;
}
</style>