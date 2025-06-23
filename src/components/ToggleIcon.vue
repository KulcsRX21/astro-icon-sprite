<script setup lang="ts">
import { ref } from 'vue';

const showIcon = ref(true);
const hideIcon = () => showIcon.value = !showIcon.value;
</script>

<template>
	<button @click="hideIcon">Toggle Icon Visibility</button>
	<div v-if="showIcon">
		<slot />
	</div>
</template>