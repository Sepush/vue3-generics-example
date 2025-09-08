<script 
  setup 
  lang="ts" 
  generic="T extends Option = Option"
>
import BasicSelect from './BasicSelect';
import type { GDSelectProps, GDSelectSlots, Option } from './public-types';

defineProps<GDSelectProps<T>>()
defineSlots<GDSelectSlots<T>>()
</script>

<template>
  <BasicSelect v-bind="$props as any">
    {{ $props }}
    <template #extra="props">
      <slot name="extra" v-bind="props as any" />
    </template>
  </BasicSelect>
</template>
