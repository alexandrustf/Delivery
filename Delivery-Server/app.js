const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: ['./routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Database
mongoose
  .connect(
    "mongodb://a96752e0-0ee0-4-231-b9ee.documents.azure.com:10255/?ssl=true&replicaSet=globaldb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        user: "a96752e0-0ee0-4-231-b9ee",
        password:
          "uOo3rSBQreVoPaGogNWnVY6RalA2jXvSYiNSHkID6NsHgk6JNcOfy04LxgDHqP1nnuJvc15N6qzLSuPu12zwpA==",
      },
    }
  )
  .then(() => console.log("Connected to database .. "))
  .catch((err) => console.log(err));

// Middleware
app.use(cors())
app.use(express.json());


//Start Server
app.listen(port, () => console.log("Server started at 3000"));
