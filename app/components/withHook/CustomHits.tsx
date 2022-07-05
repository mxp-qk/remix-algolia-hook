import { Dispatch, SetStateAction } from "react";
import { useHits } from "react-instantsearch-hooks-web";
import { Hit } from "../Hit";

export function CustomHits({
  setId,
  setDialogId,
}: {
  setId?: Dispatch<SetStateAction<string | null>>;
  setDialogId?: Dispatch<SetStateAction<string | null>>;
}) {
  const { hits, results, sendEvent } = useHits();

  return (
    <ul>
      {hits.map((hit) => (
        <Hit
          key={hit.__position}
          hit={hit}
          setId={setId}
          setDialogId={setDialogId}
        />
      ))}
    </ul>
  );
}
