<template>
    <div class="poker" :class="[
        {'show': props.show},
        {'mini': props.mini},
        `color--${props.color}`,
    ]">
        <div class="card_back"></div>
        <div class="card_front" :class="props.type ? `--${props.type}` : null" v-if="props.front">
            <div class="text">{{ props.text }}</div>
            <div class="sign"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const classes = computed(() =>[
    `type--${props.type}`,
    `color--${props.color}`,
    props.mini ? `size--mini` : null,
    props.show ? `front-show` : null,
])
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    front: {
        type: Boolean,
        default: true
    },
    show: {
        type: Boolean,
        default: false
    },
    mini: {
        type: Boolean,
        default: false
    },
})
</script>

<style lang="scss" scoped>
.poker {
    --darkBg: #ffcc33;
    --lightBg: #fff3ce;
    --darkRed: #e22929;
    --lightRed: #ffd0d0;
    --darkBlack: #000;
    --lightBlack: #777;
    position: absolute;
    min-width: 60px;
    min-height: 80px;
    &.color--red{
        color: var(--darkRed);
    }
    .card_back, .card_front{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        backface-visibility: hidden;
        transition: all 0.5s;
        filter: drop-shadow(0 0 5px silver); 
    }
    .card_back{
        border: 6px solid #fff;
        background: conic-gradient(
            var(--darkBg) 25%, 
            var(--lightBg) 25%, 
            var(--lightBg) 50%, 
            var(--darkBg) 50%, 
            var(--darkBg) 75%, 
            var(--lightBg) 75%
        );
        background-size: 20px 20px;
        transform: rotateY(0deg);
        @at-root #{'.show' + &} {
            transform: rotateY(-180deg);
        }
    }
    .card_front{
        padding: 8px;
        transform: rotateY(180deg);
        background-color: #fff;
        @at-root #{'.show' + &} {
            transform: rotateY(0deg);
        }
        .text{
            font-size: 2.4rem;
            margin-top: -5px;
            user-select: none;
            @at-root #{'.mini' + &} {
                font-size: 1.4rem;
            }
            &:after{
                @at-root #{'.mini' + &} {
                    content: '';
                }
            }
        }
        .sign{
            position: absolute;
            top: 55%;
            left: 50%;
            font-size: 6em;
            transform: translate(-50%, -50%);
            @at-root #{'.mini' + &} {
                font-size: 2.5em;
            }
        }
    }
}

.card_front .sign:after{
    @at-root #{'.--spade' + &} {
        content: "♠";
    }
    @at-root #{'.--heart' + &} {
        content: "♥";
    }
    @at-root #{'.--diamond' + &} {
        content: "♦";
    }
    @at-root #{'.--club' + &} {
        content: "♣";
    }
}
</style>