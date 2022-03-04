const express = require('express');
const mongoose = require('mongoose');
const router = require('./Router');
const corsMiddleware = require('./Middleware');

const PORT = process.env.PORT || 3001;
const { DB_URL } = process.env;

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/', router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
