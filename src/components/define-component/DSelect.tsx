import { defineComponent,h} from "vue";

export default defineComponent(
  <T extends string | number = number>(props: {
    options: T[];
    "onUpdate:value": (option: T) => void;
  }) => {
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
            </option>
          ))}
        </select>
      </div>
    );
  },
  {
    props: ["options", "onUpdate:value"],
  }
);