import { gql } from '@apollo/client';

const CREATE_TODO = gql`
  mutation todoCreate($todo: TodoInput) {
    todoCreate(todo: $todo) {
      title
      data
      status
      mark
      id
    }
  }
`;

const UPDATE_TODO = gql`
  mutation todoUpdate($todo: TodoInputUpdate) {
    todoUpdate(todo: $todo) {
      title
      data
      status
      mark
      id
    }
  }
`;

const DELETE_TODO = gql`
  mutation todoDelete($id: ID) {
    todoDelete(id: $id) {
      title
      data
      status
      mark
      id
    }
  }
`;

export { CREATE_TODO, UPDATE_TODO, DELETE_TODO };
