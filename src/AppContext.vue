<script setup lang="ts">
import { provide } from 'vue'

// in a real world scenario, you'd inject libraries like vue-i18n
provide('something', 'hey')
</script>

<template>
	<slot />
</template>
