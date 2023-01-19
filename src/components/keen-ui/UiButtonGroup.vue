<template>
    <div class="rounded">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ui-button-group',
    props: {
        type: {
            type: String,
            default: 'info' // 'info', 'success', 'warning', or 'error'
        },
        rounded: {
            type: Boolean,
            default: false
        },
    },
}
</script>

<style lang="scss" scoped>
.rounded {
    button:first {
        border-top-left-radius: 9999px !important;
        border-bottom-left-radius: 9999px !important;
    }
    button:not(:first-child) {
        border-top-left-radius: 9999px !important;
        border-bottom-left-radius: 9999px !important;
    }
}
</style>