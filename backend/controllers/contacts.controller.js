const contactsModel = require("../Models/contacts.model");
const express = require("express");
const router = express.Router();

// get all contacts
router.get("/", async (req, res) => {
  try {
    let result = await contactsModel.find();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// get specific contact
router.get("/search", async (req, res) => {
  try {
    const { name } = req.query.parms;
    let result = await contactsModel.find({
      first_name: name,
      last_name: name,
    });
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});
// creating contacts
router.post("/", async (req, res) => {
  try {
    let result = await contactsModel.create({
      first_name: req?.body?.first_name,
      last_name: req?.body?.last_name,
      phone_number: req?.body?.phone_number,
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
