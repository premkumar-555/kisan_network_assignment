const express = require("express");
const router = express.Router();
const messagesModel = require("../Models/messages.model");
const msgSender = require("../middlewares/msgSender");

router.get("/", async (req, res) => {
  try {
    let result = await messagesModel.find();
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/", msgSender, async (req, res) => {
  try {
    const { contact, OTP } = req?.body;
    let result = await messagesModel.create({
      contact: contact,
      created_at: new Date(),
      OTP: OTP,
    });
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
