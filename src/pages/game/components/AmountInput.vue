<template>
    <div class="ui-mt-8">
        <div class="ui-bg-gray-100 ui-rounded-md ui-border-2 ui-border-gray-300">
            <div class="ui-grid ui-grid-cols-4 ui-gap-2">
                <div class="ui-col-span-1 ui-flex ui-flex-col ui-p-1 ui-space-y-1">
                    <ui-button size="small" class="!ui-bg-gray-300" @click="handleButton('--')">最小</ui-button>
                    <ui-button size="small" class="!ui-bg-gray-300" @click="handleButton('-')"> 
                        <ui-icon icon="remove"/> 
                    </ui-button>
                </div>
                <div class="ui-col-span-2">
                    <div class="ui-flex ui-items-center ui-h-full">
                        <ui-input 
                            label="投注金额" 
                            color="primary" 
                            type="tel"
                            v-model="betAmount"
                            @update:value="updateBetAmount"
                        >
                            <template #append>
                                <ui-icon-button icon="attach_money" />
                            </template>
                        </ui-input>
                    </div>
                </div>
                <div class="ui-col-span-1 ui-flex ui-flex-col ui-p-1 ui-space-y-1">
                    <ui-button size="small" class="!ui-bg-gray-300" @click="handleButton('++')">最大</ui-button>
                    <ui-button size="small" class="!ui-bg-gray-300" @click="handleButton('+')"> 
                        <ui-icon icon="add"/> 
                    </ui-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

onMounted(() => {
    betAmount.value = props.currBet
})

const props = defineProps({
    currBet: {
        type: Number,
        default: 0
    },
    minBet: {
        type: Number,
        default: 0
    },
    maxBet: {
        type: Number,
        default: 0
    },
})
const betAmount = ref(1.00)
const betAmount2 = ref('1.00')

const emit = defineEmits(['update:bet'])
const handleButton = (action: string)=>{
    let amount;
    switch (action) {
        case '-':
            amount = betAmount.value / 2;
            if (amount < 1) {
                handleButton('--')
            } else {
                // betAmount.value -= amount;  
                updateBetAmount(amount.toString())
            }
            break;
        case '--': 
            betAmount.value = 1.00; 
            break;
        case '+': 
            betAmount.value += betAmount.value; 
            if (betAmount.value > 100) {
                handleButton('++')
            }
            break;
        case '++': 
            betAmount.value = 100.00; 
            break;
        default:
            return;
    }
    emit('update:bet', action)
}

const updateBetAmount = (val:string) => {
    if (isNaN(Number(val)) || val == '') {
        betAmount.value = 1.00
    } else {
        betAmount.value = Number(Number(val).toFixed(2))
    }
}
</script>

<style lang="scss" scoped>
</style>