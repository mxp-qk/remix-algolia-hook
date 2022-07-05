import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export function Details({ id }: { id: string | null }) {
  const { load, data } = useFetcher();

  useEffect(() => {
    if (id) {
      load(`/api/${id}`);
    }
  }, [id]);

  return (
    <div>
      <span>Details</span>
      {id === null ? (
        <p>Select a result for more details</p>
      ) : data ? (
        <p>{data.details}</p>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
