import { defineComponent,h, type EmitsOptions, type SetupContext, type SlotsType} from "vue";

export default defineComponent(
  <T extends string | number = number>(
    props: {
      options: T[];
      "onUpdate:value": (option: T) => void;
    },
    { slots }: SetupContext<EmitsOptions, SlotsType<{ extra: { option: T } }>>
  ) => {
    const { options } = props;

    function handleChange(e: Event) {
      const value = (e.target as HTMLSelectElement).value as T;
      props["onUpdate:value"](value);
    }
    console.log("options", options);
    return () => (
      <div>
        <select id="generic-select" onChange={handleChange}>
          {options?.map((option) => (
            <option value={option} key={option}>
              {option}
              {slots.extra?.({ option })}
            </option>
          ))}
        </select>
      </div>
    );
  },
  {
    // if you use defineComponent with generics, must `as any` when manually specify props
    // workaround for vue type issue
    props: ["options", "onUpdate:value"] as any,
  }
);