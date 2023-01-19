<template>
    <ContainerVue useBg :showRight="true">
        <div class="ui-flex ui-flex-col ui-items-center ui-h-full md:ui-max-w-[800px] ui-mx-auto ui-relative">
            
            <ResultCard v-if="false"/>
            <div class="ui-absolute" style="left: 50%;top: 50%;transform: translate(-50%, -50%);" v-if="false">
                <Spinner class="ui-justify-center"/>
            </div>

            <div class="table-view ui-w-full ui-h-full">
                <div class="ui-h-full ui-w-full ui-p-5 ui-space-y-5">
                    <div class="result-list ui-w-full">
                        <div class="ui-bg-gray-300 ui-flex ui-items-center ui-space-x-2 ui-rounded-lg ui-p-2 ui-min-h-[100px]">
                            
                            <PokerCard show mini text="A" type="club" class="!ui-relative ui-right-0 !ui-w-[60px] !ui-h-[80px]"/>
                        </div>
                    </div>
                    <div class="ui-relative ui-flex ui-flex-col ui-items-center">
                        <PokerCard :front="false" class="ui-right-0 !ui-w-[60px] !ui-h-[80px] md:!ui-w-[90px] md:!ui-h-[120px]"/>

                        <!-- 牌面 -->
                        <PokerCard 
                            @click="handlePokerCard" 
                            :show="pokerCard.show" 
                            :text="pokerCard.text" 
                            :type="pokerCard.type" 
                            class="!ui-relative ui-right-0 md:!ui-w-[120px] md:!ui-h-[160px]"
                        />
                        
                        <div class="ui-text-gray-100 ui-my-6 ui-relative ui-text-center">
                            A是最小牌, K是最大牌<br>
                            押注下一张牌比当前牌面大或小
                        </div>
                        <div class="ui-flex ui-justify-between md:ui-justify-center ui-w-full md:ui-space-x-16">
                            <ui-button push size="large" class="!ui-h-auto">
                                <div class="ui-flex ui-flex-col ui-py-2">
                                    <div class="ui-text-lg">开大</div>
                                    <div class="ui-text-sm">概率50%</div>
                                </div>
                            </ui-button>
                            <ui-button push class="!ui-rounded-full">换牌</ui-button>
                            <ui-button push size="large" class="!ui-h-auto">
                                <div class="ui-flex ui-flex-col ui-py-2">
                                    <div class="ui-text-lg">开小</div>
                                    <div class="ui-text-sm">概率50%</div>
                                </div>
                            </ui-button>
                        </div>
                    </div>

                    <div class="ui-flex ui-flex-col md:ui-mx-40">
                        <div class="ui-text-center ui-mt-6 ui-mb-4">
                            <ui-button push 
                                class="play-btn ui-w-full !ui-rounded-md" 
                                color="primary" 
                                size="large" 
                            ><ui-icon icon="smart_display" class="ui-mr-2"/>开始游戏</ui-button>
                        </div>
                        <AmountInput 
                            :curr-bet="1" 
                            :min-bet="1" 
                            :max-bet="100"
                            @update:bet=""
                        ></AmountInput>
                    </div>
                </div>
            </div>
        </div>
    </ContainerVue>
</template>

<script setup lang="ts">
import ContainerVue from '../common/Container.vue';
import AmountInput from '../common/AmountInput.vue';
import ResultCard from '../common/ResultCard.vue';
import PokerCard from '../common/PokerCard.vue';
import Spinner from '@/components/layout/Spinner.vue'
import { ref } from "vue"


const pokerCard = ref({
    show: true,
    text: 'A',
    color: '',
    type: 'heart',
})
const handlePokerCard = ()=>{
    pokerCard.value.show = !pokerCard.value.show
}
</script>

<style lang="scss" scoped>
.cards {
    width: 90px;
    height: 130px;
    border-radius: 0.5rem;
    // background-color: #3b78e7;
    border: 0.25rem solid #ffffff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0.02rem #d6d6d6, 0 0.1rem #fff, 0 0.12rem #d6d6d6, 0 0.24rem #fff, 0 0.26rem #d6d6d6, 0 0.34rem #fff, 0 0.36rem #d6d6d6, 0 0.44rem #fff, 0 0.46rem #d6d6d6, 0 0.54rem #fff, 0 0.56rem #d6d6d6;
    
}
</style>