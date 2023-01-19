<template>
    <ui-card shadow>
        <div class="game-wrap ui-flex ui-flex-col md:ui-flex-row md:ui-aspect-video">
            <div class="lt ui-flex ui-flex-1">
                <div class="ui-w-full" :class="{'game-view':props.hasBg}">
                    <!-- 游戏视图 start -->
                    <slot></slot>
                    <!-- 游戏视图 end -->
                </div>
            </div>
            <div class="rt ui-w-full md:ui-w-96 ui-flex-none ui-p-4" v-if="false">
                <div class="ui-flex ui-justify-between">
                    <div class="ui-space-x-3">
                        <ui-icon-button type="secondary" icon="help_outline" />
                        <ui-icon-button type="secondary" :icon="props.game.volume ? 'volume_on' : 'volume_off'" />
                        <ui-icon-button type="secondary" icon="insights" />
                    </div>
                    <div>
                        <ui-button 
                            class="!ui-rounded-l-full" 
                            color="primary"
                            @click="handleMode('manual')"
                        >手动</ui-button>
                        <ui-button 
                            type="primary" 
                            class="!ui-rounded-r-full" 
                            @click="handleMode('auto')"
                        >自动</ui-button>
                    </div>
                </div>
                <div class="ui-mx-4">
                    <slot name="amount-input"></slot>
                    <slot name="start-button"></slot>
                </div>
            </div>

            <div class="rt ui-w-full md:ui-w-96 ui-flex-none ui-p-4">
                <slot name="control"></slot>
            </div>
        </div>
    </ui-card>
</template>

<script setup lang="ts">
import { ref } from "vue"

const betAmount = ref(0)
const shakeClass = ref(false)
let timer = ref<NodeJS.Timeout>();
const emits = defineEmits(['startGame', 'cashOut'])
const props = defineProps({
    hasBg: {
        type: Boolean, 
        default: false
    },
    start: {
        type: Boolean, 
        default: false
    },
    over: {
        type: Boolean, 
        default: false
    },
    mode: {
        type: String, 
        default: 'manual'
    },
    game: {
        type: Object,
        default: ()=> {
            return {
                start: false,
                over: false,
                betAmount: 0,
                winAmount: 0,
                mode: 1,
                volume: true,
            }
        }
    }
})

const gameMode = ref('manual')
const handleMode = (mode: 'manual' | 'auto')=>{
    gameMode.value = mode
}
</script>

<style lang="scss" scoped>

.game-view{
    border-radius: 0.75rem;
    background: linear-gradient(to top, rgb(160, 167, 190) 0%, rgb(109, 115, 141) 70%);
}
</style>