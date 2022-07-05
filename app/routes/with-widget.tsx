import { useState } from "react";
import {
  Configure,
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from "react-instantsearch-hooks-web";
import { Details } from "~/components/withHook/Details";
import { Hit } from "~/components/Hit";
import { searchClient } from "~/searchClient";

export default function WithWidget() {
  const [id, setId] = useState<string | null>(null);
  return (
    <>
      <h2>With widget</h2>
      <div
        style={{
          width: "100%",
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        <InstantSearch
          searchClient={searchClient}
          indexName="REMIX_TEST"
          routing
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Configure hitsPerPage={10} />
            <SearchBox placeholder="Search..." />
            <RefinementList attribute="color" />
          </div>
          <Hits hitComponent={({ hit }) => <Hit hit={hit} setId={setId} />} />
        </InstantSearch>
        <Details id={id} />
      </div>
    </>
  );
}
