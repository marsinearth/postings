/** from {@link https://github.com/relayjs/relay-examples/blob/664ac8ba999717c09a829ce0d68a5a55a734ecad/issue-tracker-next-v13/src/relay/loadSerializableQuery.ts} */

import {
  GraphQLResponse,
  OperationType,
  RequestParameters,
  VariablesOf,
} from "relay-runtime";
import type { ConcreteRequest } from "relay-runtime/lib/util/RelayConcreteNode";
import { networkFetch } from "./environment";

export interface SerializablePreloadedQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
> {
  params: TRequest["params"];
  variables: VariablesOf<TQuery>;
  response: GraphQLResponse;
}

// Call into raw network fetch to get serializable GraphQL query response
// This response will be sent to the client to "warm" the QueryResponseCache
// to avoid the client fetches.
export default async function loadSerializableQuery<
  TRequest extends ConcreteRequest,
  TQuery extends OperationType
>(
  params: RequestParameters,
  variables: VariablesOf<TQuery>,
  token: string
): Promise<SerializablePreloadedQuery<TRequest, TQuery>> {
  const response = await networkFetch(params, variables, token);

  return {
    params,
    variables,
    response,
  };
}
