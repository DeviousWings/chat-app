const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    const { fullName, username, passowrd, phoneNumber } = req.body;

    const userId = crypto.randomBytes(16).toString("hex");

    const severClient = connect(api_key, api_secret, app_id);

    const hashedPassword = await bcrypt.hash(password, 10); //The ten specifies the level of encryption

    const token = serverClient.createUserToken(userId);

    res
      .status(200)
      .json({ token, password, username, userId, hashedPassword, phoneNumber });
  } catch (error) {
    console.log(error); //sending data to the front end

    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);

    const { users } = await client.queryUsers({ name: username });

    if (!users.length)
      return res.status(400).json({ message: "User not found" }); //Querying the user from the data base

    const success = await bcrypt.compare(password, users[0].hashedPassword); //Again encrypting the password

    const token = serverClient.createUserToken(users[0].id); //no longer passing a regular user ID but THAT user id. Creating the new token

    if (success) {
      res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};
module.exports = { signup, login };
