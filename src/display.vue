<script setup>
import { ref, onMounted, computed } from 'vue';
import NumberFlow from '@number-flow/vue';

// Props destructuring for setup script
const props = defineProps({
	value: {
		type: Number,
		default: null,
	},
	trailingZeroDisplay: {
		type: Boolean,
		default: false,
	},
	currency: {
		type: Boolean,
		default: false,
	},
	currencyType: {
		type: String,
		default: 'USD',
	},
	prefix: {
		type: String,
		default: '',
	},
	suffix: {
		type: String,
		default: '',
	},
});

// Create a reactive reference for the number
const displayedValue = ref(0);

// Update the displayedValue to the prop value after the component is mounted
onMounted(() => {
	if (props.value !== null) {
		displayedValue.value = props.value;
	}
});

// Compute the format options based on the props
const formatOptions = computed(() => {
	let options = {
		trailingZeroDisplay: props.trailingZeroDisplay ? 'auto' : 'stripIfInteger'
	};

	if (props.currency) {
		options = {
			...options,
			style: 'currency',
			currency: props.currencyType,
		};
	} else {
		options = {
			...options,
			style: 'decimal',
		};
	}

	return options;
});
</script>

<template>
	<NumberFlow :value="displayedValue" :format="formatOptions" :prefix="props.prefix" :suffix="props.suffix" />
</template>
