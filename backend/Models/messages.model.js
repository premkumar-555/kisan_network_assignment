const mongoose = require("mongoose");

// messages Schema
const messagesSchema = new mongoose.Schema(
  {
    contact: { type: mongoose.Schema.Types.ObjectId, ref: "Contacts" },
    created_at: { type: Date, required: true },
    OTP: { type: Number, required: true },
  },
  {
    timeStamps: true,
    versionKeys: false,
  }
);

// messages model
const messagesModel = mongoose.model("Messages", messagesSchema);
module.exports = messagesModel;
