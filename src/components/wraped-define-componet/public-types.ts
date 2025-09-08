import type { VNode } from "vue";

export type Option = string | number;

export type OnUpdateValue<T extends Option = Option> = (option: T) => void;

export type ResolveAbleSelectOption<T extends Option = Option> = T ;

export type GDSelectProps<T extends Option = Option> = {
  options: T[];
  "onUpdate:value": OnUpdateValue<T>;
};

export type GDSelectSlots<T extends Option = Option> = {
  extra: (props: { option: ResolveAbleSelectOption<T> }) => VNode[];
};
