import { gql } from '@apollo/client';

const GET_ALL_TODOS = gql`
  query {
    todoGetAll {
      title
      data
      status
      mark
      id
    }
  }
`;

export { GET_ALL_TODOS };
