<template>
    <div class="ui-flex ui-justify-between ui-items-center">
        <div class="ui-space-x-3">
            <ui-icon-button type="secondary" :icon="volume?'volume_up':'volume_off'"  @click="handleVolume"/>
            <ui-icon-button type="secondary" icon="insights"  @click="handleStats"/>
            <ui-icon-button type="secondary" icon="help_outline" @click="handleHelp"/>
        </div>
        <div>
            <!-- <ui-button 
                class="!ui-rounded-l-full" 
                type="primary"
                :color="currMode == 'manual' ? 'primary' : 'default'"
                @click="handleMode('manual')"
            >手动</ui-button>
            <ui-button 
                type="primary"
                :color="currMode == 'auto' ? 'primary' : 'default'"
                class="!ui-rounded-r-full" 
                @click="handleMode('auto')"
            >自动</ui-button> -->

        </div>
        <ui-switch v-model="mode" switch-position="right" @change="handleMode">
            <span :class="{'text-primary': mode}">自动游戏</span>
        </ui-switch>
    </div>

    <div class="ui-mx-4">
        <slot></slot>
        <!-- <slot name="auto" v-if="currMode == 'auto'"></slot> -->
        <!-- <slot name="manual" v-if="currMode == 'manual'"></slot> -->
    </div>
    <ui-modal ref="helpModal"><slot name="helpModal"></slot></ui-modal>
    <ui-modal ref="statsModal"><slot name="statsModal"></slot></ui-modal>

</template>

<script setup lang="ts">
import { ref } from "vue"
const emit = defineEmits(['help-modal','stats-modal','volume','on-mode'])

const mode = ref(false) 
const volume = ref(true)

const handleMode = (value: boolean) => {
    mode.value = value
    emit('on-mode', value ? 'auto' : 'manual')
}
const handleVolume = ()=>{
    volume.value = !volume.value
    emit('volume', volume.value)
}

const helpModal = ref()
const statsModal = ref()
const handleHelp = ()=>helpModal.value.open()
const handleStats = ()=>statsModal.value.open()
</script>

<style lang="scss" scoped>
</style>