<script setup lang="ts" generic="T extends string | number = string">
const props = defineProps<{
  options: T[];
  "onUpdate:value": (option: T) => void;
}>();

function handleChange(e: Event) {
  const value = (e.target as HTMLSelectElement).value as T;
  props["onUpdate:value"](value);
}
</script>
<template>
  <select @change="handleChange">
    <option v-for="option in props.options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>