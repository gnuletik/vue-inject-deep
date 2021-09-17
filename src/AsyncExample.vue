<script setup lang="ts">
import { inject } from 'vue'

const something = inject('something')
</script>

<template>
	<p>async component injected: {{ something }}</p>
</template>
