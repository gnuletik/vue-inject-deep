<script setup lang="ts">
import { inject } from 'vue'

const something = inject('something')
</script>

<template>
	<p>util component injected: {{ something }}</p>
</template>
