const mongoose = require("mongoose");

// contacts Schema
const contactsSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: Number, required: true },
  },
  {
    timeStamps: true,
    versionKeys: false,
  }
);

// contacts model
const contactsModel = mongoose.model("Contacts", contactsSchema);
module.exports = contactsModel;
