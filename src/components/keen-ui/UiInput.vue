<template>
    <label class="ui-input" :class="{'is-active': isActive || modelValue.length != ''}, '__' + color">
        <div class="__inner" :class="inputClass">
            <div class="__append"><slot name="prepend" /></div>
            <div class="input_wrap">
                <input ref="input" class="__input" :type="type" 
                    :value="modelValue"
                    @focus="onFocus" 
                    @blur="onBlur" 
                    @change="onChange"
                    @input="updateValue($event.target.value)"
                />
                <div class="__label">{{label}}</div>
            </div>
            <div class="__append"><slot name="append" /></div>
        </div>
    </label>
</template>

<script>
import UiCloseButton from './UiCloseButton.vue';
import UiIcon from './UiIcon.vue';
export default {
    name: 'ui-input',

    emits: ['update:value', 'focus', 'change', 'blur'],

    props: {
        type: {
            type: String,
            default: 'text' // 'left' or 'right'
        },
        placeholder: String,
        icon: String,
        iconPosition: {
            type: String,
            default: 'left' // 'left' or 'right'
        },
        help: String,
        error: String,
        readonly: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'default'
        },
        label: {
            type: String, 
            default: ''
        },
        inputClass: {
            type: String, 
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
    },
    data() {
        return {
            initValue: this.modelValue,
            isActive: false,
        };
    },
    created() {
        // Normalize the value to an empty string if it's null
        if (this.modelValue === null) {
            this.initValue = '';
            this.updateValue('');
        }
    },
    methods: {
        valueLeng(){
            return this.modelValue
        },
        updateValue(e){
            this.$emit('update:value', e);
        },
        onChange(e){
            // this.initialValue = e.target.value;
            this.$emit('change', this.modelValue, e);
        },
        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        },
        reset() {
            // Blur input before resetting to avoid "required" errors
            // when the input is blurred after reset
            if (document.activeElement === this.$refs.input) {
                document.activeElement.blur();
            }

            // Reset state
            this.updateValue(this.initialValue);
            this.isTouched = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/imports';
.ui-input {
    .__inner {
        border-radius: 4px;
        padding: 0 12px;
        height: 56px;
        max-width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        
        &:hover:before {
            border-width: var(--input-border-hover-width, 2px);
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: inherit;
            pointer-events: none;
            border: 1px solid rgba(0, 0, 0, 0.24);
            transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
            @at-root #{'.is-active' + &} {
                border-width: var(--input-border-width, 1px);
                border-color: var(--input-border-color, rgba(0, 0, 0, 0.24));
                
                @at-root #{'.__primary' + &} {
                    border: 2px solid $brand-primary-color;
                }
            }
        }
        .input_wrap {
            display: flex;
            flex: 1 auto;
            color: rgba(0, 0, 0, 0.24);
        }
        .__input {
            width: 100%;
            min-width: 0;
            outline: 0;
            line-height: 24px;
            padding-top: 28px;
            padding-bottom: 4px;
            background: none;
        }
        .__label{
            position: absolute;
            pointer-events: none;
            left: 12px;
            top: 18px;
            max-width: 100%;
            color: var(--input-label-color, rgba(0, 0, 0, 0.6));
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            letter-spacing: 0.00937em;
            text-decoration: inherit;
            text-transform: inherit;
            transform-origin: left top;
            transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.324s cubic-bezier(0.4, 0, 0.2, 1);
            @at-root #{'.is-active' + &} {
                transform: translateY(-40%) scale(0.75);
                @at-root #{'.__primary' + &} {
                    color: $brand-primary-color;
                }
            }
        }
    }
}
</style>