const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const connect = require("./db/connect");
require("dotenv").config();
// controllers
const contactsController = require("./controllers/contacts.controller");
const messagesController = require("./controllers/messges.controller");

app.use(cors());
app.use(express.json());
// routes
app.use("/api/contacts/", contactsController);
app.use("/api/messages/", messagesController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("Successfully connected to PORT ", PORT);
  } catch (error) {
    console.log("error at server ", error.message);
  }
});
