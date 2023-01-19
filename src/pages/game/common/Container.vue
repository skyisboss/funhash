<template>
    <ui-card shadow>
        <div class="game-wrap ui-flex ui-flex-col md:ui-flex-row md:ui-aspect-video">
            <div class="lt ui-flex ui-flex-1">
                <div class="ui-w-full" :class="{'game-view':props.useBg}">
                    <!-- 游戏视图 start -->
                    <slot></slot>
                    <!-- 游戏视图 end -->
                </div>
            </div>

            <div class="rt ui-w-full md:ui-w-96 ui-flex-none ui-p-4" v-if="props.showRight">
                <div class="ui-flex ui-justify-between ui-items-center">
                    <div class="ui-space-x-3">
                        <ui-icon-button 
                            type="secondary" 
                            :icon="volume?'volume_up':'volume_off'" 
                            @click="handleVolume"
                            v-if="showVolume"
                        />
                        <ui-icon-button 
                            type="secondary" 
                            icon="insights"  
                            @click="handleModal('stats')"
                            v-if="showStatsModal"
                        />
                        <ui-icon-button 
                            type="secondary" 
                            icon="help_outline" 
                            @click="handleModal('help')"
                            v-if="showHelpModal"
                        />
                    </div>
                    <ui-switch v-model="autoPlay" switch-position="right" @change="handleAutoPlay">
                        <span :class="{'text-primary': autoPlay}">自动游戏</span>
                    </ui-switch>
                </div>
                <div class="ui-mx-4">
                    <slot name="manual-mode" v-if="mode == 'manual'"></slot>
                    <slot name="auto-mode" v-if="mode == 'auto'"></slot>
                </div>
            </div>
        </div>
    </ui-card>

    <ui-modal :ref="helpModalRef" v-if="showHelpModal"><slot name="helpModal"></slot></ui-modal>
    <ui-modal :ref="statsModalRef" v-if="showStatsModal"><slot name="statsModal"></slot></ui-modal>
</template>

<script setup lang="ts">
import { ref,computed } from "vue"

const emit = defineEmits(['volume', 'autoPlay'])
const props = defineProps({
    useBg: {
        type: Boolean, 
        default: false
    },
    showRight: {
        type: Boolean, 
        default: true
    },
    showVolume: {
        type: Boolean,
        default: true,
    },
    showStatsModal: {
        type: Boolean,
        default: true,
    },
    showHelpModal: {
        type: Boolean,
        default: true,
    },
    autoPlay: {
        type: Boolean, 
        default: false
    },
    volume: {
        type: Boolean,
        default: true,
    },
})
const mode = computed(() => autoPlay.value ? 'auto' : 'manual')
const autoPlay = ref(props.autoPlay)
const helpModalRef = ref(null) as any
const statsModalRef = ref(null) as any
const volume = ref(props.volume)

function handleVolume(){
    volume.value = !volume.value
    emit('volume', volume.value)
}
function handleModal(key: 'help' | 'stats'){
    if (key == 'help') {
        helpModalRef.value.open()
    } else {
        statsModalRef.value.open()
    }
}
const handleAutoPlay = (auto: boolean)=>{
    autoPlay.value = auto
    emit('autoPlay', auto)
}
</script>

<style lang="scss" scoped>

.game-view{
    border-radius: 0.75rem;
    background: linear-gradient(to top, rgb(160, 167, 190) 0%, rgb(109, 115, 141) 70%);
}
</style>