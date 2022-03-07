const { buildSchema } = require('graphql');

const schema = buildSchema(`

  type Todo {
    title: String
    data: String
    status: Boolean
    mark: Boolean
    id: ID
  }

  input TodoInput {
    title: String!
    data: String
    status: Boolean
    mark: Boolean
  }

  input TodoInputUpdate {
    title: String!
    data: String
    status: Boolean
    mark: Boolean
    id: ID
  }

  type Query {
    todoGetAll: [Todo]
    todoGetOne(where: ID): Todo
  }

  type Mutation {
    todoCreate(todo: TodoInput): Todo
    todoDelete(id: ID): Todo
    todoMarkUpdate(mark: Boolean, id: ID): Todo
    todoStatusUpdate(status: Boolean, id: ID): Todo
  }

`);

module.exports = schema;
