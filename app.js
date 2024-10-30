// require('dotenv').config();

const express = require("express");
const cors = require('cors');
const testDbConnection = require('./db/testDbConnection');

const app = express();
const serverConfig = require("./config/serverConfig");

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

app.listen(PORT, async () => {
  try {
    testDbConnection();
    console.log(`Server has been started on port ${PORT}`);
  } catch (error) {
    console.log(`Проблемы с БД! ${error.message}.`);
  }
});
