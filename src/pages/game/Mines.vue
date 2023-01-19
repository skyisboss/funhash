<!-- background: radial-gradient(circle at 50% 45%, rgb(54 176 213), rgb(251 184 246)); -->
<template>
    <GameContainerVue hasBg>
        <div class="ui-h-full ui-flex ui-items-center md:ui-max-w-[600px] ui-mx-auto ui-p-4 ui-relative">
            <div class="ui-grid ui-grid-cols-5 ui-gap-4 ui-w-full ui-aspect-square">
                <div class="ui-aspect-square" v-for="(item, i) in state.gameData" :key="i">
                    <template v-if="item.open">
                        <ui-button class="item-btn !ui-bg-gray-300 !ui-w-full !ui-h-full !ui-rounded-xl">{{item.result}}</ui-button>
                    </template>
                    <template v-else>
                        <ui-button push :class="{'ui-opacity-60': !isGameStart}" class="item-btn bg-grey-blue !ui-w-full !ui-h-full !ui-rounded-xl" @click="game.mining(i)">
                            <span class="ui-text-gray-300">?</span>
                        </ui-button>
                    </template>
                </div>
                
            </div>
            <ShowResult v-if="state.gameResult.show" :result="state.gameResult"/>
        </div>
        
        <template #control>
            <ControlPanel @onMode="game.setMode">
                <div class="ui-flex md:ui-flex-col ui-flex-col-reverse">
                    <div class="ui-mt-8" v-if="state.mode == 'auto'">
                        <div class="ui-space-y-4">
                            <div><ui-input label="设定游戏次数" inputClass="ui-bg-gray-100">
                                <template #append><ui-icon-button icon="info_outline" /></template>
                            </ui-input></div>
                            <div><ui-input label="设定止盈点位" inputClass="ui-bg-gray-100">
                                <template #append><ui-icon-button icon="info_outline" /></template>
                            </ui-input></div>
                            <div><ui-input label="设定止损点位" inputClass="ui-bg-gray-100">
                                <template #append><ui-icon-button icon="info_outline" /></template>
                            </ui-input></div>
                        </div>
                    </div>
                    <AmountInput 
                        :curr-bet="state.currBet" 
                        :min-bet="state.minBet" 
                        :max-bet="state.maxBet"
                        @update:bet=""
                    />
                    <div class="ui-mt-8 ui-text-center">
                        <div class="ui-flex ui-space-x-2" v-if="state.gameState === GameState.ready">
                            <ui-button  
                                size="large" 
                                color="orange"
                                class="!ui-rounded-md !ui-px-2" 
                                @click="game.autoPick"
                            >快速选择</ui-button>
                            <ui-button push 
                                :class="{'shake': state.showShake}" 
                                @click="game.start"
                                class="play-btn ui-w-full !ui-rounded-md" 
                                color="primary" 
                                size="large" 
                            ><ui-icon icon="smart_display" class="ui-mr-2"/>开始游戏</ui-button>
                        </div>

                        <ui-button push   
                            class="play-btn ui-w-full bg-grey-blue !ui-text-white" 
                            size="large" 
                            @click="game.cashOut"
                            v-if="state.gameState === GameState.process"
                        ><ui-icon icon="attach_money"/>兑换 {{state.winAmount.toFixed(2)}}</ui-button>
                    </div>
                </div>

                <div class="ui-mt-10 ui-px-2 ui-flex ui-items-end">
                    <div>
                        <div class="ui-pr-4">埋雷数量</div>
                        <div>赔率x{{ (state.mineTotal * 0.5 + 0.6) }}</div>
                    </div>
                    <div class="ui-w-full ui-flex ui-flex-1 ui-px-2">
                        <ui-slider size="large" class="is-active ui-w-full" :min="1" :max="24" show-marker v-model="state.mineTotal"></ui-slider>
                    </div>
                </div>
                
            </ControlPanel>
        </template>
    </GameContainerVue>
</template>

<script setup lang="ts">
import GameContainerVue from './components/GameContainer.vue';
import ShowResult from './components/ShowResult.vue'
import AmountInput from './components/AmountInput.vue'
import ControlPanel from './components/ControlPanel.vue'
import { ref,reactive,computed, onMounted } from "vue"

// ['🧧', '💣', '🧨']
onMounted(() => {
    game.createGameData()
})

const shakeTimer = ref<NodeJS.Timeout>();
enum GameState {ready, process, done};
const isGameStart = computed(() => state.gameState == GameState.process)
const state = reactive({
    gameState: GameState.ready,
    minBet: 1.00,
    maxBet: 100,
    currBet: 1.00,
    winAmount: 0,
    volume: true,
    mineTotal: 20,
    odds: 10.6,
    mode: 'manual',
    isWin: false,
    showShake:false,
    showResult: false,
    gameResult: {
        win: false,
        show: false,
        text: '',
    },
    gameData: [] as any
})
/************* handler ***************/
const game = {
    setMode:(mode: string)=>state.mode = mode,
    createGameData: () => {
        state.gameData = new Array(25).fill('').map( (item, index) => {
            return {
                id: 0,
                open: false,
                result: '',
            }
        })
    },
    start:()=>{
        if (state.currBet <= 0 || state.gameState == GameState.process) {
            return;
        }
        game.showResult(false)
        game.createGameData();
        state.gameState = GameState.process
    },
    cashOut:()=>{
        if (state.gameState == GameState.process) {
            state.gameState = GameState.ready;
            state.gameResult.show = true;
            state.gameResult.win = true;
            state.gameResult.win = true;
        }
        // state.gameStart = false;
        // state.gameDone = true;
    },
    mining:(x: number)=>{
        if (!isGameStart.value) {
            clearTimeout(shakeTimer.value)
            state.showShake = true
            shakeTimer.value = setTimeout(() => state.showShake = false, 500);
            return
        }

        const bom = Math.round(Math.random() * (2 - 1)) + 1 === 1
        state.gameData[x].open = true;
        state.gameData[x].result = bom ? '💣' : '🧧';
        if (bom) {
            game.done()
        } else {

        }
    },
    done: ()=>{
        state.gameData.map((item:any) => {
            item.result = '💣'
            item.open = true
            return item
        })

        state.gameState = GameState.ready;
        game.showResult(true);
    },
    showResult: (show: boolean)=>{
        state.gameResult.show = show;
    },
    autoPick:()=>{},
    
}
</script>

<style lang="scss" scoped>
.item-btn{
    font-size: 36px;
    font-family: 'MyFont';
}
</style>