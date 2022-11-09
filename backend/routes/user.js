const express = require("express");
const User = require('../models/user')
router = express.Router();

router.post('/signup', async (req,res) => {
    const user_name  = req.body.user_name
    const password  = req.body.password
    const name = req.body.name
    const email  = req.body.email
    const phonenumber = req.body.phonenumber
    const user = new User({user_name , password, name, email, phonenumber});
    await user.save();
    
    res.send("You made a post request")
})

router.post("/login", async (req, res) => {
    const username  = req.body.user_name
    const password  = req.body.password
    const user = await User.find({user_name : username})

    if(user[0] != undefined){
        if (user[0].password == password){
            // res.json(user[0])
            res.json("Login success")
        }else{
            res.json("Incorrect username or password.")
        }
    }else{
        res.json("Incorrect username or password.")
    }
    
  })

exports.router = router;




