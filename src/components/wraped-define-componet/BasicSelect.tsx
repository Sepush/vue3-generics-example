import { defineComponent, h, type PropType, type SlotsType} from "vue";
import type { GDSelectSlots, OnUpdateValue, Option } from "./public-types";

export const selectProps = {
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  "onUpdate:value": Function as PropType<OnUpdateValue<Option>>
}

export default defineComponent({
  props: selectProps,
  slots: Object as SlotsType<GDSelectSlots<Option>>,
  setup(props) {
    function handleChange(e: Event) {
      const value = (e.target as HTMLSelectElement).value;
      props["onUpdate:value"]?.(value);
    }
    return {
      handleChange,
    };
  },
  render() {
    const { options, handleChange, $slots } = this;
    return (
      <select id="g-select" onChange={handleChange}>
        {options?.map((option) => (
          <option value={option} key={option}>
            {$slots.extra?.({ option }) ?? option}
          </option>
        ))}
      </select>
    );
  },
});