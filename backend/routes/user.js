const express = require("express");
const User = require("../models/user");
router = express.Router();

router.post("/signup", async (req, res) => {
  const findExistsName = User.find({ user_name: { $eq: req.body.user_name } });
  const findExistsEmail = User.find({ email: { $eq: req.body.email } });
  const findName = await findExistsName.exec();
  if (findName.length > 0) {
    res.send("username has exists");
    return;
  }
  const findEmail = await findExistsEmail.exec();
  if (findEmail.length > 0) {
    res.send("email has exists");
    return;
  }

  const user_name = req.body.user_name;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const user = new User({ user_name, password, name, email, phone });
  await user.save();

  res.send("You made a post request");
});

router.post("/login", async (req, res) => {
  const username = req.body.user_name;
  const password = req.body.password;
  const user = await User.find({ user_name: username });

  if (user[0] != undefined) {
    if (user[0].password == password) {
      // res.json(user[0])
      res.json("Login success");
    } else {
      res.json("Incorrect username or password.");
    }
  } else {
    res.json("Incorrect username or password.");
  }
});

exports.router = router;
