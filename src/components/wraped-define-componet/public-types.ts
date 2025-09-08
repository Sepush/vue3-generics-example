import type { VNode } from "vue";

export type Option = string | number;

export type OnUpdateValue<T> = (option: T) => void;

export type GDSelectProps<T extends Option = Option> = {
  options: T[];
  "onUpdate:value": OnUpdateValue<T>;
};

export type GDSelectSlots<T extends Option = Option> = {
  extra: (props: { option: T }) => VNode[];
};
