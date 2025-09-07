<script setup lang="ts">
import { DefineComponentSelect, SetupSelect } from './components';

const options = [1, 2, 3, 4, 5];
const soptions = ['a', 'b', 'c', 'd', 'e'];
function handleChange(option: number | string) {
  console.log('selected', option);
}
</script>

<template>  
  <h3>script setup generics</h3>
  <SetupSelect :options="options" @update:value="handleChange" />
  <h3>defineComponent generics</h3>
  <!-- Can't get right IDE support now -->
  <DefineComponentSelect :options="soptions" @update:value="handleChange" />
</template>
