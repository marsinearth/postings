/**
 * @generated SignedSource<<aab9902ee7c36524927d33a3ed755234>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getUsersQuery$variables = {};
export type getUsersQuery$data = {
  readonly User_connection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly created_at: any;
        readonly email: string;
        readonly id: string;
        readonly name: string;
        readonly updated_at: any;
      };
    }>;
  };
};
export type getUsersQuery = {
  response: getUsersQuery$data;
  variables: getUsersQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "UserConnection",
    "kind": "LinkedField",
    "name": "User_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "created_at",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updated_at",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getUsersQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d0bd2b70c14f29c5e3432907a9120287",
    "id": null,
    "metadata": {},
    "name": "getUsersQuery",
    "operationKind": "query",
    "text": "query getUsersQuery {\n  User_connection {\n    edges {\n      node {\n        id\n        email\n        name\n        created_at\n        updated_at\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c1bd40a412122b94d979292dd78894bf";

export default node;
