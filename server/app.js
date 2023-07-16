/** Copyright: Ayush Kaushik */
const express = require("express");
const cors = require("cors");

const handleError = (error, request, response, next) => {
  console.log(error);

  const status = error.status || 500;
  response.status(status).send(error.message);
}

const createApp = () => {
  try {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(handleError);

    const PORT = process.env.PORT || 5000;
    const HOST = process.env.HOST || '127.0.0.1';

    const server = app.listen(PORT, () => {
      console.log(`Server running on ${PORT}!`);
    });

    return { app, server };
  } catch (error) {
    logger.error(error.stack);
  }
};

const serverAppCombo = createApp();

module.exports = serverAppCombo;