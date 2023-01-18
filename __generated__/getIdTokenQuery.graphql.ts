/**
 * @generated SignedSource<<883c330674063a470b3c774087a95e3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type getIdTokenQuery$variables = {};
export type getIdTokenQuery$data = {
  readonly viewer: {
    readonly id_token: string | null;
  } | null;
};
export type getIdTokenQuery = {
  response: getIdTokenQuery$data;
  variables: getIdTokenQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id_token",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getIdTokenQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getIdTokenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4e8cbee4d910814cc9f35a4dac592acc",
    "id": null,
    "metadata": {},
    "name": "getIdTokenQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "2638d2c57c63677a5f3b9211421b0fd8";

export default node;
