<template>
<ui-card shadow>
    <div class="ui-flex ui-flex-col md:ui-flex-row md:ui-aspect-video">
        <div class="lt ui-flex ui-flex-1">
            <div class="ui-w-full">
                <!-- 游戏视图 start -->
                <div class="ui-relative ui-w-full ui-h-full ui-rounded-xl ui-overflow-hidden" style="min-height: 300px;background: linear-gradient(to top, rgb(160, 167, 190) 0%, rgb(109, 115, 141) 70%);">
                    <div class="ui-absolute ui-left-1/2 pokers" style="transform: translate(-50%, -50%);"></div>
                    <div class="ui-absolute pokers play"></div>
                    <div class="ui-absolute pokers play2"></div>

                    <div class="ui-absolute ui-top-[230px] ui-left-1/2" style="transform: translate(-50%, -50%);">
                        <div class="ui-p-10 ui-bg-white1 ui-text-center ui-text-white">
                            <div class="ui-text-2xl">您赢</div>
                            <div class="ui-text-4xl">+5000.00</div>
                        </div>
                    </div>
                    <div class="ui-grid ui-grid-cols-2 ui-pt-14">
                        <div class="ui-h-52 md:ui-h-64 ui-flex ui-flex-col ui-items-center">
                            <div class="ui-bg-white ui-rounded-full ui-px-3 ui-py-1 ui-w-28 ui-text-center">闲家牌</div>
                            <div class="ui-flex ui-relative ui-mt-10 ui-left-[-15px]">
                                <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12"></div>
                                <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-top-[15px] ui-left-[15px]" style="background: #6d738d;"></div>
                                <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-top-[30px] ui-left-[30px]" style="background: #6d738d;"></div>
                            </div>
                        </div>
                        <div class="ui-h-52 md:ui-h-64 ui-flex ui-flex-col ui-items-center">
                            <div class="ui-bg-white ui-rounded-full ui-px-3 ui-py-1 ui-w-28 ui-text-center">闲家牌</div>
                            <div class="ui-flex ui-relative ui-mt-10 ui-right-[-15px]">
                                <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12"></div>
                                <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-top-[15px] ui-right-[15px]" style="background: #6d738d;"></div>
                                <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-top-[30px] ui-right-[30px]" style="background: #6d738d;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="ui-flex ui-justify-evenly ui-pt-10" v-if="false">
                        <div class="ui-h-52 md:ui-h-64">
                            <div class="ui-flex ui-flex-col ui-items-end md:ui-mr-20">
                                <div class="ui-bg-white ui-rounded-full ui-px-3 ui-py-1 ui-w-28 ui-text-center">闲家牌</div>
                                <div class="ui-relative ui-top-5 md:ui-top-10 ui-right-10">
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-right-0" data-v-21440a18=""></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-right-0 ui-top-4 ui-right-4" style="background: rgb(109, 115, 141);"></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-right-0 ui-top-8 ui-right-8" style="background: rgb(109, 115, 141);"></div>
                                </div>
                            </div>
                        </div>
                        <div class="ui-h-52 md:ui-h-64">
                            <div class="ui-flex ui-flex-col ui-items-end md:ui-mr-20">
                                <div class="ui-bg-white ui-rounded-full ui-px-3 ui-py-1 ui-w-28 ui-text-center">闲家牌</div>
                                <div class="ui-relative ui-top-5 md:ui-top-10 ui-right-10">
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-left-0" data-v-21440a18=""></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-left-0 ui-top-4 ui-left-4" style="background: rgb(109, 115, 141);"></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-left-0 ui-top-8 ui-left-8" style="background: rgb(109, 115, 141);"></div>
                                </div>
                            </div>
                        </div>


                        <div class="ui-w-1/2 ui-h-52 md:ui-h-64" v-if="false">
                            <div class="ui-flex ui-flex-col ui-items-end md:ui-mr-20">
                                <div class="ui-bg-white ui-rounded-full ui-px-3 ui-py-1 ui-w-28 ui-text-center">闲家牌</div>
                                <div class="ui-relative ui-top-5 md:ui-top-10 ui-right-10">
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-right-0" data-v-21440a18=""></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-right-0 ui-top-4 ui-right-4" style="background: rgb(109, 115, 141);"></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-right-0 ui-top-8 ui-right-8" style="background: rgb(109, 115, 141);"></div>
                                </div>
                            </div>
                        </div>
                        <div class="ui-w-1/2 ui-h-52 md:ui-h-64" v-if="false">
                            <div class="ui-flex ui-flex-col md:ui-ml-20">
                                <div class="ui-bg-white ui-rounded-full ui-px-3 ui-py-1 ui-w-28 ui-text-center">庄家牌</div>
                                <div class="ui-relative ui-top-5 md:ui-top-10 ui-left-10">
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-left-0" data-v-21440a18=""></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-left-0 ui-top-4 ui-left-4" style="background: rgb(109, 115, 141);"></div>
                                    <div class="ui-rounded ui-border ui-border-dashed ui-px-9 ui-py-12 ui-absolute ui-left-0 ui-top-8 ui-left-8" style="background: rgb(109, 115, 141);"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui-px-4 md:ui-px-32 md:ui-h-52">
                        <div class="ui-w-full ui-h-full">
                            <div class="ui-grid ui-grid-cols-4 ui-h-full">
                                <div class="bet-table ui-col-span-1 ui-bg-white ui-h-full ui-rounded-l-full ui-border-dashed ui-border-r">
                                    <div class="center">
                                        闲<br/>x1.5
                                    </div>
                                </div>
                                <div class="ui-col-span-2 ui-h-full">
                                    <div class="ui-grid ui-grid-cols-2 ui-h-full">
                                        <div class="bet-table ui-col-span-2 ui-bg-white ui-border-dashed ui-border-b">
                                            <div class="center">和<br/>x1.5</div>
                                        </div>
                                        <div class="bet-table ui-bg-white  ui-border-dashed ui-border-r">
                                            <div class="center">闲对<br/>x1.5</div>
                                        </div>
                                        <div class="bet-table ui-bg-white">
                                            <div class="center">庄对<br/>x1.5</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bet-table ui-col-span-1 ui-bg-white ui-h-full ui-rounded-r-full ui-border-dashed ui-border-l">
                                    <div class="center">庄<br/>x1.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ui-mt-8 ui-px-32">
                        
                        <div class="ui-bg-white ui-rounded-lg ui-p-2 ui-h-32 ui-flex ui-space-x-2">
                            <div class="colors" v-for="x in 20"></div>
                        </div>
                    </div>
                </div>
                <!-- 游戏视图 end -->
            </div>
        </div>
        <div class="rt ui-w-full md:ui-w-96 ui-flex-none ui-p-4">
            <div class="ui-text-center">
                <ui-button push class="!ui-rounded-l-full bg-secondary text-secondary">手动模式</ui-button>
                <ui-button push class="!ui-rounded-r-full">自动模式</ui-button>
            </div>
            <div class="ui-mx-4">
                <div class="ui-mt-8">
                    <div class="ui-bg-slate-200 ui-rounded-md ui-border-2 ui-border-slate-300">
                        <div class="ui-grid ui-grid-cols-4 ui-gap-2">
                            <div class="ui-col-span-1 ui-flex ui-flex-col ui-p-1 ui-space-y-1">
                                <ui-button size="small" class="!ui-bg-slate-300"> <ui-icon icon="remove"/> </ui-button>
                                <ui-button size="small" class="!ui-bg-slate-300">最小</ui-button>
                            </div>
                            <div class="ui-col-span-2">
                                <div class="ui-flex ui-items-center ui-h-full">
                                    <ui-autocomplete 
                                        class="!ui-mb-0 ui-border=ui-border-slate-300=ui-p-1=ui-rounded-md"
                                        floating-label
                                        label="投注金额"
                                        name="favourite_month"

                                        v-model="autocomplete2"
                                    ></ui-autocomplete>
                                </div>
                            </div>
                            <div class="ui-col-span-1 ui-flex ui-flex-col ui-p-1 ui-space-y-1">
                                <ui-button size="small" class="!ui-bg-slate-300"> <ui-icon icon="add"/> </ui-button>
                                <ui-button size="small" class="!ui-bg-slate-300">最大</ui-button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ui-mt-8 ui-text-center">
                    <ui-button push class="ui-w-full !ui-rounded-md" color="primary" size="large">开始游戏</ui-button>
                </div>

                <div class="ui-mt-8 ui-h-full ui-flex ui-justify-between">
                    <ui-button push class="!ui-rounded-full">
                        <span class="ui-px-4">撤销</span>
                    </ui-button>
                    <ui-button push class="!ui-rounded-full">
                        <span class="ui-px-4">清台</span>
                    </ui-button>
                </div>
            </div>
        </div>
    </div>
</ui-card>
</template>

<script setup lang="ts">
import PageContainer from "@/components/layout/PageContainer.vue";
import { ref } from "vue"

const autocomplete2 = ref()
</script>

<style lang="scss" scoped>
.center{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
}
.bet-table{
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;
    &:hover{
        background-color: #e2e8f0;
        &:active {
            background-color: rgb(226 232 240/0.8);
        }
    }
}
.pokers {
    width: 80px;
    height: 100px;
    border-radius: 0.5rem;
    background-color: #35c31e;
    border: 0.25rem solid #ffffff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0.02rem #d6d6d6, 0 0.1rem #fff, 0 0.12rem #d6d6d6, 0 0.24rem #fff, 0 0.26rem #d6d6d6, 0 0.34rem #fff, 0 0.36rem #d6d6d6, 0 0.44rem #fff, 0 0.46rem #d6d6d6, 0 0.54rem #fff, 0 0.56rem #d6d6d6;
}
.colors{
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #35c31e;
    box-shadow: 0 0.02rem #993939, 0 1.5rem #182d91, 0 3rem #ab1818, 0 4.5rem #182d91, 0 6rem #ab1818;
}
@keyframes pokerplay {
    0%{
        transform: translate3d(-0, 0, 0);
    }
    100%{
        transform: translate3d(-160px, 150px, 10px);
    }
}
.play {
    right: 50%;
    z-index: 9;
    animation: 5s pokerplay linear infinite;
    box-shadow: none;
}
@keyframes pokerplay2 {
    0%{
        transform: translate3d(-0, 0, 0);
    }
    100%{
        transform: translate3d(160px, 150px, 10px);
    }
}
.play2 {
    left: 50%;
    z-index: 9;
    animation: 5s pokerplay2 linear infinite;
    box-shadow: none;
}
</style>