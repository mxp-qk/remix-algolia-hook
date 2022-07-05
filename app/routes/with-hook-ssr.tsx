import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Dispatch, SetStateAction, useState } from "react";
import { getServerState } from "react-instantsearch-hooks-server";
import {
  Configure,
  InstantSearch,
  InstantSearchSSRProvider,
} from "react-instantsearch-hooks-web";
import { history } from "instantsearch.js/es/lib/routers";
import { Details } from "~/components/withHook/Details";
import { searchClient } from "~/searchClient";
import { CustomSearchBox } from "~/components/withHook/CustomSearchBox";
import { CustomRefinementList } from "~/components/withHook/CustomRefinementList";
import { CustomHits } from "~/components/withHook/CustomHits";

export const loader: LoaderFunction = async ({ request }) => {
  const serverState = await getServerState(<Search url={request.url} />);

  return { serverState, url: request.url };
};

export default function WithWidget() {
  const { serverState, url } = useLoaderData();

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
        <InstantSearchSSRProvider {...serverState}>
          <Search url={url} setId={setId} />
        </InstantSearchSSRProvider>
        <Details id={id} />
      </div>
    </>
  );
}

function Search({
  url,
  setId,
}: {
  url: string;
  setId?: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="REMIX_TEST"
      routing={{
        router: history({
          getLocation: () => {
            return typeof window === "undefined"
              ? (new URL(url) as unknown as Location)
              : window.location;
          },
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
  );
}
