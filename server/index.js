const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const TodoController = require('./Controller');

const PORT = process.env.PORT || 3001;
const DB_URL =
  'mongodb+srv://user:123@cluster0.y1igg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: TodoController,
  }),
);

const dbConnection = mongoose.connection;

const start = async () => {
  try {
    await mongoose.connect(DB_URL);

    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
dbConnection.on('error', (err) => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));
