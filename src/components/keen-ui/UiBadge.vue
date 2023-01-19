<template>
    <div class="ui-badge">
        <slot>{{ label }}</slot>
    </div>
</template>

<script>
import UiCloseButton from './UiCloseButton.vue';
import UiIcon from './UiIcon.vue';
export default {
    name: 'ui-badge',
    props: {
        type: {
            type: String,
            default: 'info' // 'info', 'success', 'warning', or 'error'
        },
        label: {
            type: String,
            default: ''
        },
    },
}
</script>

<style lang="scss" scoped>
@import './styles/imports';
.ui-badge {
    position: absolute;
    background: #35c31e;
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 12px;
    min-height: 12px;
    border-radius: 1em;
    top: 5px;
    right: 10px;
    border-color: rgb(255 255 255);
    border-width: 2px;
}
</style>