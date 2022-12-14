const express = require("express");
const User = require("../models/user");
router = express.Router();
const multer = require("multer");

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

  try {
    const user = await User.find({ user_name: user_name });
    const e = await User.find({ email: email });

    if (user.length != 0 && e.length != 0) {
      res.send("Duplicate username and email");
    } else if (e.length != 0) {
      res.send("Duplicate email");
    } else if (user.length != 0) {
      res.send("Duplicate username");
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
      res.json("Register is successful");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
  const user = await User.find({ user_name });

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
    } else if (queryFriendData.name === queryMyData.name) {
      res.json("Can't add friend yourself");
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
                image: queryFriendData.image,
                status: "Pending",
                nameSender: queryMyData.name,
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
                image: queryMyData.image,
                status: "Pending",
                nameRecipient: queryFriendData.name,
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

router.get("/getFriend/:user_name", async (req, res) => {
  const user_name = req.params.user_name;
  try {
    const user = await User.updateOne(
      { user_name: user_name },
      {
        $push: {
          friends: { $each: [], $sort: { status: -1 } },
        },
      }
    );
    res.json(user);
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
        {
          $and: [
            { "friends.name": nameYourSelf },
            { "friends.nameSender": nameFriend },
          ],
        },
        {
          $set: {
            "friends.$.status": "Accepted",
          },
        }
      );

      const acceptFriendTo = await User.updateOne(
        {
          $and: [
            { "friends.name": nameFriend },
            { "friends.nameRecipient": nameYourSelf },
          ],
        },
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

router.delete("/unFriend/:nameYourSelf/:nameFriend", async (req, res) => {
  const nameYourSelf = req.params.nameYourSelf;
  const nameFriend = req.params.nameFriend;
  try {
    const FindIdYourSelf = await User.findOne({ name: nameYourSelf });
    console.log(FindIdYourSelf._id);
    const FindIdFriend = await User.findOne({ name: nameFriend });
    console.log(FindIdFriend._id);
    const unFriend = await User.updateOne(
      { "friends._id": FindIdFriend._id },
      {
        $pull: {
          friends: {
            _id: FindIdFriend._id,
          },
        },
      }
    );

    const unFriendTo = await User.updateOne(
      { "friends._id": FindIdYourSelf._id },
      {
        $pull: {
          friends: {
            _id: FindIdYourSelf._id,
          },
        },
      }
    );
    if (unFriend) {
      res.json({ unFriend: "unFriend Success :(" });
    } else {
      res.json({ unFriend: "unFriend Fail :p" });
    }
  } catch (err) {
    res.json(err);
  }
});

exports.router = router;
