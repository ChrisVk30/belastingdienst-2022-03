<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  stage: Number,
});

const computedStage = computed(() => props.stage + 3);
</script>

<template>
  <h2>Computed properties</h2>

  stage: {{ stage }}

  computed stage: {{ computedStage }}
</template>
