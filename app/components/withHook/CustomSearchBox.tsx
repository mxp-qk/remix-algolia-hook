import { ChangeEventHandler } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";

export function CustomSearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    refine(e.currentTarget.value);
  };

  return (
    <input
      type="search"
      onChange={onChange}
      value={query}
      placeholder="Search..."
      aria-label="Search"
    />
  );
}
