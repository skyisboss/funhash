<template>
    <div class="ui-absolute ui-rounded-3xl result-wrap ui-shadow-2xl ui-shadow-green-500">
        <div class="ui-p-8 ui-text-center ui-text-white ui-space-y-3">
            <div class="ui-text-2xl" v-if="props.result.win">✨🎉您赢🤩✨</div>
            <div class="ui-text-2xl" v-else>💔您输了🥺😱</div>
            <div class="ui-text-4xl">{{ props.result.win ? '+' : '-' + props.result.text  }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {  } from "vue"
const props = defineProps({
    result: {
        type: Object,
        default: {
            win: false,
            text: '',
        },
    },
})
</script>

<style lang="scss" scoped>
@keyframes AnimationBackground {
    0%{background-position:0% 50%; }
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}
@keyframes AnimationText {
    0%{ transform: translateX(-200px); }
    100%{ transform: translateX(0); }
}
.result-wrap{
    left: 50%; 
    top: 50%;
    z-index: 99;
    transform: translate(-50%, -50%); 
    animation: 1s AnimationBackground linear infinite;
    background: radial-gradient(circle at 50% 45%, #36d5d5, #d384e1);
    background-size: 800% 800%;
    // background: radial-gradient(circle at 50% 45%, #36d5d5, #d384e1);
}
</style>