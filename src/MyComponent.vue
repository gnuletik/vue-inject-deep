<script setup lang="ts">
import { inject } from 'vue'
import Util from './Util.vue'

const something = inject('something')
</script>

<template>
	<p>my component injected : {{ something }}</p>
	<Util />
</template>
