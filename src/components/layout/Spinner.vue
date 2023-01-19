<template>
    <div class="spinner" :class="props.color">
        <span class="bounce"></span>
        <span class="bounce"></span>
        <span class="bounce"></span>
    </div>
</template>

<script setup lang="ts">
import {} from "vue";

const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    }
})
</script>

<style lang="scss" scoped>
@keyframes bouncedelay {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}
.spinner {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    display: flex;
    z-index: 1;
    .bounce {
        margin: 0 3px;
        width: 12px;
        height: 12px;
        border-radius: 100%;
        display: inline-block;
        animation: bouncedelay 1.2s ease-in-out infinite both;
        background-color: #35c31e;
        @at-root #{'.white' + &} {
            background-color: #ffffff;
        }
        &:first-child{
            animation-delay: -.32s;
        }
        &:nth-child(2) {
            animation-delay: -.16s;
        }
    }
}
</style>
