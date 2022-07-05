import { Dispatch, SetStateAction } from "react";
import type { Hit as THit } from "instantsearch.js";

export function Hit({
  setId,
  hit,
}: {
  setId?: Dispatch<SetStateAction<string | null>>;
  hit: THit;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".25rem",
        paddingBlock: ".25rem",
      }}
    >
      <span>{hit.common_name}</span>
      <div style={{ display: "flex" }}>
        <button onClick={() => (setId ? setId(hit.objectID) : null)}>
          Details
        </button>
      </div>
    </div>
  );
}
