import { graphql } from "relay-runtime";

export const getUsers = graphql`
  query getUsersQuery {
    User_connection {
      edges {
        node {
          id
          email
          name
          created_at
          updated_at
        }
      }
    }
  }
`;
