<template>
    <ContainerVue >
        <div class="ui-flex ui-flex-col ui-items-center ui-h-full ui-max-w-[300px] md:ui-max-w-[800px] ui-mx-auto ui-relative">
            <div class="ui-w-full ui-flex ui-justify-start ui-py-4">
                <div class="bounce">200ms</div>
            </div>
            <canvas id="canvas" width="800" height="600" class="max-w-full" style="background: #f5f5f5;"></canvas>
            <ResultCard v-if="false"/>

            <div class="ui-absolute" style="left: 50%;top: 40%;transform: translate(-50%, -50%); ">
                <Spinner class="ui-justify-center ui-mb-4"/>
                <div class="ui-text-3xl text-primary">正在连接</div>
            </div>
        </div>

        <template #manual-mode>
            <div class="ui-flex md:ui-flex-col ui-flex-col-reverse">
                <AmountInput 
                    :curr-bet="1" 
                    :min-bet="1" 
                    :max-bet="100"
                    @update:bet=""
                />

                <div class="ui-mt-8 ui-text-center">
                    <ui-button push 
                        class="play-btn ui-w-full !ui-rounded-md" 
                        color="primary" 
                        size="large" 
                    ><ui-icon icon="smart_display" class="ui-mr-2"/>开始游戏</ui-button>
                </div>
            </div>
        </template>
        <template #auto-mode>
            auto-mode
        </template>
    </ContainerVue>
</template>

<script setup lang="ts">
import ContainerVue from '../common/Container.vue';
import AmountInput from '../common/AmountInput.vue';
import ResultCard from '../common/ResultCard.vue';
import Spinner from '@/components/layout/Spinner.vue'
import { ref, reactive, onMounted,nextTick } from "vue"
import { game } from './gmae'
import { ws } from './ws'

onMounted(() => {
    initWebSocket()
    nextTick(() => initGame())
})

const initGame = ()=>{
    game.initGame();
}
const initWebSocket = ()=>{}

</script>
<style lang="scss" scoped>
.bounce {
    &:before{
        content: '';
        margin: 0 3px;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        display: inline-block;
        background-color: #35c31e;
    }
}
</style>