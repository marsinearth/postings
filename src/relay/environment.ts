/** from {@link https://github.com/relayjs/relay-examples/edit/main/issue-tracker-next-v13/src/relay/environment.ts} */

import {
  CacheConfig,
  Environment,
  GraphQLResponse,
  Network,
  QueryResponseCache,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

const HTTP_ENDPOINT = `https://${
  process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API ?? ""
}`;
const IS_SERVER = typeof window === typeof undefined;
const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

export async function networkFetch(
  request: RequestParameters,
  variables: Variables,
  token: string
): Promise<GraphQLResponse> {
  const headers: HeadersInit = {
    Accept: "application/json",
    // Authorization: `bearer ${token}`,
    "X-Hasura-Role": "anonymous",
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `bearer ${token}`;
    delete headers["X-Hasura-Role"];
  }

  console.log({ token });

  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });
  const json = await resp.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    // console.error(json.errors);
    // throw new Error(
    //   `Error fetching GraphQL query '${
    //     request.name
    //   }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
    //     json.errors
    //   )}`
    // );
  }

  return json;
}

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

function createNetwork(token: string) {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
  ) {
    const isQuery = params.operationKind === "query";
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;
    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(params, variables, token);
  }

  const network = Network.create(fetchResponse);
  return network;
}

export function createEnvironment(token: string) {
  return new Environment({
    network: createNetwork(token),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
  });
}
