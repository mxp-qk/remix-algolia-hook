import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<Response | { id: string; details: string }> => {
  const { id } = params as { id: string };

  console.log("API", params);

  return { id, details: `Some details on object ${id}` };
};
