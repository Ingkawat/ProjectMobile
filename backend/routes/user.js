const express = require("express");
const User = require("../models/user");
router = express.Router();
const multer = require("multer");



router.post("/user/:user_name", async (req, res) => {
  const user_name = req.params.user_name;

  const user = await User.findOne({ user_name : user_name });

  res.send(user);
});

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log('in multerdestination')
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        console.log('in filename')
        console.log(file)
        callback(
            null, Date.now() + ".jpg"
            
        );
    },
});
const upload = multer({
    storage: storage
});
  
router.post("/signup",upload.single("images"), async (req, res) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  console.log(password)
  try {
    const user = await User.find({ user_name: user_name });
    const e = await User.find({email: email});
    console.log(email)
    console.log(e)
    if(user.length != 0){
        res.send("Username is no unique")
    }else if(e.length != 0){
        res.send("Email is no unique")
    }
    else {
        if(req.file == undefined){
            const user = new User({ user_name, password, name, email, phone });
            await user.save();
          }else{
             let image = req.file.path.substr(8);
             const user = new User({ user_name, password, name, email, phone, image });
             await user.save();
          }
          res.json("register is success");
    }

    
  } catch (error) {
    console.log(error)

    
  }
});

router.post("/login", async (req, res) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
  const user = await User.find({ user_name });
  console.log(user)

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
