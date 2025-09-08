<script setup lang="ts">
import { DefineComponentSelect, SetupSelect, WrapedGenericSelect } from './components';

const options = [1, 2, 3, 4, 5];
const soptions = ['a', 'b', 'c', 'd', 'e'];
function handleChange(option: number | string) {
  console.log('selected', option);
}
</script>

<template>  
  <h3>script setup generics</h3>
  <SetupSelect :options="options" @update:value="handleChange">
    <template #extra="{ option }">
      <span>- s -{{ option }}</span>
    </template>
  </SetupSelect>
  <h3>defineComponent generics</h3>
  <DefineComponentSelect :options="soptions" @update:value="handleChange" >
    <template #extra="{ option }">
      <span>-d -{{ option }}</span>
    </template>
  </DefineComponentSelect>
  <h3>wrapped generics</h3>
  <WrapedGenericSelect :options="soptions" @update:value="handleChange" >
    <template #extra="{ option }">
      <span style="color: red">- w -{{ option }}</span>
    </template>
  </WrapedGenericSelect>
</template>
