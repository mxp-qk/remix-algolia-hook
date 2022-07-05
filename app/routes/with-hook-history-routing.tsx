import { useState } from "react";
import { Configure, InstantSearch } from "react-instantsearch-hooks-web";
import { history } from "instantsearch.js/es/lib/routers";
import { CustomRefinementList } from "~/components/withHook/CustomRefinementList";
import { CustomSearchBox } from "~/components/withHook/CustomSearchBox";
import { Details } from "~/components/withHook/Details";
import { searchClient } from "~/searchClient";
import { CustomHits } from "~/components/withHook/CustomHits";

export default function WithWidget() {
  const [id, setId] = useState<string | null>(null);

  return (
    <>
      <h2>With hook (history routing)</h2>
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
          routing={{
            router: history({
              getLocation: () => window.location,
            }),
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Configure hitsPerPage={10} />
            <CustomSearchBox />
            <CustomRefinementList attribute="color" />
          </div>
          <CustomHits setId={setId} />
        </InstantSearch>
        <Details id={id} />
      </div>
    </>
  );
}
