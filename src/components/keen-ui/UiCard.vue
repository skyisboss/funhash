<template>
    <div class="ui-card" :class="{'shadow': shadow}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ui-card',
    props: {
        type: {
            type: String,
            default: 'info' // 'info', 'success', 'warning', or 'error'
        },
        shadow: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss" scoped>
@import './styles/imports';
.ui-card {
    position: relative;
    border-radius: 0.75rem;
    vertical-align: top;
    background: var(--card-color, #fff);
    &.shadow {
        --card-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
        --card-shadow-colored: 0 10px 15px -3px var(--card-shadow-color), 0 4px 6px -4px var(--card-shadow-color) !important;
        box-shadow: var(--card-offset-shadow, 0 0 #0000), var(--card-ring-shadow, 0 0 #0000), var(--card-shadow) !important;
    }
    .section {
        padding: 1rem;
        position: relative;
    }
}
</style>