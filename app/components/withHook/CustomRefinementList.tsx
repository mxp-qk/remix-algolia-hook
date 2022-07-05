import { ChangeEventHandler } from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";

export function CustomRefinementList(
  props: Parameters<typeof useRefinementList>[0]
) {
  const { items, refine } = useRefinementList(props);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    refine(e.currentTarget.value);
  };

  return (
    <fieldset>
      <legend>{props.attribute}</legend>
      {items.map(({ label, value }) => (
        <div key={value}>
          <input type="checkbox" onChange={onChange} value={value} />
          <label>{label}</label>
        </div>
      ))}
    </fieldset>
  );
}
