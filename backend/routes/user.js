const express = require("express");
const User = require("../models/user");
router = express.Router();
const multer = require("multer");
const { find } = require("../models/user");

router.post("/user/:user_name", async (req, res) => {
  const user_name = req.params.user_name;

  const user = await User.findOne({ user_name: user_name });

  res.send(user);
});

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log("in multerdestination");
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    console.log("in filename");
    console.log(file);
    callback(null, Date.now() + ".jpg");
  },
});
const upload = multer({
  storage: storage,
});

router.post("/signup", upload.single("images"), async (req, res) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  console.log(password);
  try {
    const user = await User.find({ user_name: user_name });
    const e = await User.find({ email: email });
    console.log(email);
    console.log(e);
    if (user.length != 0) {
      res.send("Username is no unique");
    } else if (e.length != 0) {
      res.send("Email is no unique");
    } else {
      if (req.file == undefined) {
        const user = new User({ user_name, password, name, email, phone });
        await user.save();
      } else {
        let image = req.file.path.substr(8);
        const user = new User({
          user_name,
          password,
          name,
          email,
          phone,
          image,
        });
        await user.save();
      }
      res.json("register is success");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
  const user = await User.find({ user_name });
  console.log(user);

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

router.post("/sendFriendRequest/:name", async (req, res) => {
  const sentFrom = req.params.name;
  const sentTo = req.body.FriendName;
  try {
    const queryMyData = await User.findOne({ name: sentFrom });
    const queryFriendData = await User.findOne({ name: sentTo });
    if (queryFriendData === null) {
      res.json("Name is not exists");
    } else {
      const findFriend = queryMyData.friends.find(
        ({ name }) => name === queryFriendData.name
      );
      if (findFriend === undefined) {
        const addFriendFrom = await User.updateOne(
          { _id: queryMyData._id },
          {
            $push: {
              friends: {
                _id: queryFriendData._id,
                name: queryFriendData.name,
                status: "Pending",
                sentByYourSelf: true,
              },
            },
          }
        );
        const addFriendTo = await User.updateOne(
          { _id: queryFriendData._id },
          {
            $push: {
              friends: {
                _id: queryMyData._id,
                name: queryMyData.name,
                status: "Pending",
                sentByYourSelf: false,
              },
            },
          }
        );
        if (addFriendFrom) {
          return res.json({
            sendFriendRequest: "sendFriendRequest Success :p)",
          });
        } else {
          return res.json({ sendFriendRequest: "sendFriendRequest Failed :(" });
        }
      } else {
        res.json("You already sent friend request");
      }
    }
  } catch (err) {
    res.json(err);
  }
});

router.post(
  "/acceptFriendRequest/:nameYourSelf/:nameFriend",
  async (req, res) => {
    const nameYourSelf = req.params.nameYourSelf;
    const nameFriend = req.params.nameFriend;
    try {
      const acceptFriend = await User.updateOne(
        { "friends.name": nameFriend },
        {
          $set: {
            "friends.$.status": "Accepted",
          },
        }
      );

      const acceptFriendTo = await User.updateOne(
        { "friends.name": nameYourSelf },
        {
          $set: {
            "friends.$.status": "Accepted",
          },
        }
      );
      if (acceptFriend) {
        res.json({ acceptFriendRequest: "acceptFriendRequest Success :p" });
      } else {
        res.json({ acceptFriendRequest: "acceptFriendRequest Fail :(" });
      }
    } catch (err) {
      res.json(err);
    }
  }
);

router.delete("/unFriend", async (req, res) => {
  try {
  } catch (err) {
    res.json(err);
  }
});

exports.router = router;
