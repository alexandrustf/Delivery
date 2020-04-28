const express = require("express");
const mongoose = require("mongoose");
const app = express();

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
app.use(express.json());

//Controllers
const PackageController = require("./controllers/PackageController");

//Routes
app.post("/packages", PackageController.create);
app.get("/packages", PackageController.retrive);
app.delete("/packages", PackageController.delete);

//Start Server
app.listen(3000, () => console.log("Server started at 3000"));
