<template>
    <div class="bg ui-h-96 ui-absolute ui-left-0 ui-right-0 ui-top-[56px]" />
    <div class="banner ui-h-80 md:ui-h-96 ui-container ui-mx-auto ui-max-w-screen-xl ui-h-full">
        <div class="ui-relative ui-z-0 ui-hidden md:ui-block">
            <!-- <div class="ui-w-28 ui-h-44 bg ui-top-10" :style="{ 'background': `url(${svg1}) no-repeat` }" /> -->
            <div class="ui-absolute ui-w-max ui-left-[70px] ui-top-[45px]">
                <img :src="svg1"/>
            </div>
            <div class="ui-absolute ui-w-max ui-left-[30px] ui-top-[245px]">
                <img :src="svg2"/>
            </div>
            <div class="ui-absolute ui-w-max ui-right-[40px] ui-top-[150px]">
                <img :src="svg3"/>
            </div>
            <div class="ui-absolute ui-w-max ui-right-[220px] ui-top-[50px]">
                <img :src="svg4"/>
            </div>
            <div class="ui-absolute ui-w-max ui-right-[30px]">
                <img :src="svg5"/>
            </div>
        </div>
        <div class="ui-flex ui-flex-col md:ui-justify-center ui-text-center md:ui-h-full ui-relative ui-z-5 ui-p-4">
            <h1 class="ui-text-2xl md:ui-text-3xl ui-font-bold ui-mb-10">最公平的区块链游戏娱乐</h1>
            <h2 class="ui-space-y-2">
                <p>基于区块链和加密技术 所有开奖结果提前公布</p>
                <!-- <p>游戏结果无法篡改 游戏算法公开透明 </p> -->
                <p>使用加密货币派彩 完全保护个人隐私</p>
                <p>游戏公开透明 结果公平公正</p>

                <ui-button :push="true" class="bg-gray-white !ui-rounded-lg !ui-mt-12">
                    <span class="ui-px-14">了解更多</span>
                    <ui-icon icon="arrow_right_alt"/>
                </ui-button>
            </h2>
        </div>
    </div>

    <div class="infos ui-mt-6">
        <div class="ui-grid ui-grid-cols-1 ui-gap-8 md:ui-grid-cols-10">
            <ui-card class="md:ui-col-span-4">
                <swiper
                    class="swiper"
                    :modules="modules"
                    :space-between="30"
                    :pagination="{ clickable: true }"
                >
                    <swiper-slide class="slide">
                        <img class="ui-rounded-xl" :src="carousel2" alt="" srcset="">
                    </swiper-slide>
                    <swiper-slide class="slide">Slide 2</swiper-slide>
                    <swiper-slide class="slide">Slide 3</swiper-slide>
                    <swiper-slide class="slide">Slide 4</swiper-slide>
                    <swiper-slide class="slide">Slide 5</swiper-slide>
                    <swiper-slide class="slide">Slide 6</swiper-slide>
                    <swiper-slide class="slide">Slide 7</swiper-slide>
                    <swiper-slide class="slide">Slide 8</swiper-slide>
                </swiper>
            </ui-card>
            <ui-card class="md:ui-col-span-3 ui-p-4">
                <div class="ui-grid ui-grid-cols-2 ui-gap-4">
                    <div class="ui-col-span-1 ui-w-full ui-h-28 ui-bg-gray-50 ui-rounded-lg">
                        <div 
                            class="font-bold text-base text-amber-600 ui-w-full ui-h-full ui-p-2 ui-flex ui-items-center" 
                            style="background:url(/src/assets/home-page/ad1.png) right center no-repeat"
                        >新人召集令</div> 
                    </div>
                    <div class="ui-col-span-1 ui-bg-gray-50 ui-rounded-lg">
                        <div 
                            class="font-bold text-base text-amber-600 ui-w-full ui-h-full ui-p-2 ui-flex ui-items-center" 
                            style="background:url(/src/assets/home-page/ad2.png) right center no-repeat"
                        >免费抽大奖</div> 
                    </div>
                    <div class="ui-col-span-2 ui-h-28 ui-w-full ui-bg-gray-50 ui-rounded-lg ui-flex ui-flex-col ui-items-center ui-justify-center">
                        <div class="">TOP震撼发布</div>
                        <div class="">2022/02/02</div>
                    </div>
                </div>
            </ui-card>
            <ui-card class="md:ui-col-span-3 ui-p-4">
                <div class="ui-font-bold ui-text-base">轻松充值</div>
                <div class="ui-flex ui-flex-col ui-justify-center">
                    <div class="ui-flex ui-justify-between ui-mt-14">
                        <img src="@/assets/svg/visa.svg" alt="" />
                        <img src="@/assets/svg/mastercard.svg" alt="" />
                        <img src="@/assets/svg/app_pay.svg" alt="" />
                        <img src="@/assets/svg/google_pay.svg" alt="" />
                    </div>
                    <div class="ui-mt-14 ui-text-center ui-pb-8">
                        <ui-button :push="true" class="bg-gray-white !ui-rounded-full">
                            <span class="ui-px-14">在线购买</span>
                            <ui-icon icon="arrow_right_alt"/>
                        </ui-button>
                    </div>
                </div>
                <div class="ui-flex ui-flex-col ui-justify-center ui-h-full ui-my-6 md:ui-my-0" v-if="false">
                    <div class="ui-flex ui-justify-between ui-mt-4 md:ui-mt-0">
                        <img src="@/assets/svg/visa.svg" alt="" />
                        <img src="@/assets/svg/mastercard.svg" alt="" />
                        <img src="@/assets/svg/app_pay.svg" alt="" />
                        <img src="@/assets/svg/google_pay.svg" alt="" />
                    </div>
                    <div class="ui-mt-8 ui-text-center">
                        <ui-button :push="true" class="bg-gray-white !ui-rounded-full ">
                            <span class="ui-px-14">在线购买</span>
                            <ui-icon icon="arrow_right_alt"/>
                        </ui-button>
                    </div>
                </div>
            </ui-card>
        </div>
    </div>

    <div class="games ui-mt-14">
        <div class="ui-w-full ui-text-center md:ui-text-left">
            <ui-button color="primary" class="!ui-rounded-full ui-mb-6">
                <ui-icon icon="sports_esports"/>
                <span class="ui-ml-2">游戏大厅</span>
            </ui-button>
        </div>

        <div class="ui-grid ui-grid-cols-2 ui-gap-4 md:ui-grid-cols-3 md:ui-gap-12">
            <router-link class="game-item" :to="game.href" v-for="game in games" :key="game.href">
                <ui-card shadow>
                    <div class="ui-aspect-video !ui-rounded-xl !ui-shadow-lg ui-w-full ui-flex ui-justify-center ui-p-2" 
                        :style="{'background': game.color}">
                        <img :src="game.image">
                    </div>
                    <div class="ui-p-1 md:ui-p-4 ui-text-center">{{ game.title }}</div>
                </ui-card>
            </router-link>
            <ui-card shadow class="md:ui-hidden ui-block">
                <div class="ui-flex ui-flex-col ui-items-center ui-justify-center ui-h-full">
                    <ui-icon icon="join_full" class="!ui-text-5xl ui-mb-2"/>
                    <div>更多游戏即将到来</div>
                </div>
            </ui-card>
        </div>
    </div>

    <div class="record ui-mt-14 ui-mb-10">
        <ui-button class="!ui-rounded-l-full" color="primary">最新记录</ui-button>
        <ui-button class="!ui-rounded-none bg-secondary text-secondary">大奖记录</ui-button>
        <ui-button class="!ui-rounded-r-full bg-secondary text-secondary">高额下注</ui-button>

        <ui-card class="ui-p-4 ui-mt-6">
            <ui-table ref="tableRef" textAlign="!ui-text-center" :columns="table.columns" :rows="table.rows"/>
        </ui-card>
    </div>
</template>

<script setup lang="ts">
import { ref, defineComponent } from "vue"
import svg1 from '@/assets/svg/gem-1.svg'
import svg2 from '@/assets/svg/gem-2.svg'
import svg3 from '@/assets/svg/gem-3.svg'
import svg4 from '@/assets/svg/gem-4.svg'
import svg5 from '@/assets/svg/gem-5.svg'
import carousel2 from '@/assets/home-page/carousel2.jpeg'
import ad1 from '@/assets/home-page/ad1.png'
import ad2 from '@/assets/home-page/ad2.png'
import SwiperClass, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'

defineComponent({
    Swiper,
    SwiperSlide
})
const modules = [Pagination]

const games = [
    {
        title: '红包扫雷',
        image: '/src/assets/game-logo/mines.webp',
        href: '/mines',
        color: 'linear-gradient( rgba(248,199,185) 0%, rgba(45,63,135) 100%)',
    },
    {
        title: '太空飞行',
        image: 'src/assets/game-logo/crash.png',
        href: '/rocket',
        color: 'radial-gradient(circle at 60% 35%, #3672d5, #f6cf5b)',
    },
    {
        title: '百家乐',
        image: 'src/assets/game-logo/baccarat.png',
        href: '/bjl',
        color: 'linear-gradient(rgb(120 191 255) 0%, rgb(245 137 119) 100%)',
    },
    {
        title: '猜骰子',
        image: 'src/assets/game-logo/dice.png',
        href: '/baojiale',
        color: 'linear-gradient(245deg, #9df2d6, #8568cc)',
    },
    {
        title: '大乐透',
        image: 'src/assets/game-logo/roulette.png',
        href: '/baojiale',
        color: 'radial-gradient(circle at 40% 73%, #a387ab, #246492)',
    },
    {
        title: '扑克传奇',
        image: 'src/assets/game-logo/hilo.png',
        href: '/poker',
        color: 'radial-gradient(circle at 42% 29%, rgb(117 84 249), rgb(153 157 97))',
    },
    {
        title: '六合彩',
        image: 'src/assets/game-logo/keno.png',
        href: '/baojiale',
        color: 'linear-gradient(80deg, #3d52f3, #fabde6)',
    },
    {
        title: '旋转加密币',
        image: 'src/assets/game-logo/slot.png',
        href: '/baojiale',
        color: 'linear-gradient(122deg, #5487a1, #b188c7)',
    },
    {
        title: '大转盘',
        image: 'src/assets/game-logo/wheel.png',
        href: '/baojiale',
        color: 'radial-gradient(circle at 89% 8%, #a2cb86, #a88fb9)',
    },
]

const tableRef = ref(null) as any;
setTimeout(() => {
   console.log(tableRef.value!.update());
    
}, 1000);
const table = {
    columns: [
        { name: 'game', label: '游戏'},
        { name: 'player', label: '玩家'},
        { name: 'bet', label: '投注', format: (val:number) => `${val.toFixed(2)}`},
        { name: 'odds', label: '赔率'},
        { name: 'profit', label: '盈利', format: (val:number) => `${val.toFixed(2)}`},
    ],
    rows: new Array(10).fill('').map( (item, index) => {
        return {
            game: `游戏${index}`,
            player: `玩家${index}`,
            bet: 6.0 * index,
            profit: 116.0 * index,
            odds: index + 'x'
        }
    })
}
</script>

<style lang="scss" scoped>
@keyframes floatFrames {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(60deg)
    }
}

.bg {
    background: url('@/assets/home-page/bg.png') no-repeat 0% -70px;
    background-size: cover;
}
.banner {
    position: relative;
    color: var(--primary-text-color);
    .ui-w-max {
        animation: 12s floatFrames linear infinite;
        animation-direction: alternate;
        &:first-child {
            animation-delay: 0.6s;
        }
        &:last-child {
            animation-delay: 1.2s;
        }
        &:nth-child(2) {
            animation-delay: 0.9s;
            
        }
        &:nth-child(3) {
            animation-delay: 0.1s;
            
        }
    }
    
}

a.game-item {
    img{
        transition: all 0.15s ease;
        width: auto;
        height: 100%;
        &:hover {
            transform: scale(1.2);
        }
    }
}
</style>