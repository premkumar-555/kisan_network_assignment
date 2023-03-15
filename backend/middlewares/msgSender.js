const { Vonage } = require("@vonage/server-sdk");
const vonage = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET,
});

const msgSender = async (req, res, next) => {
  try {
    const { phone_number: to, text } = req?.body;
    const from = "OTP-sender";
    await vonage.sms.send({ to, from, text });
    next();
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = msgSender;
