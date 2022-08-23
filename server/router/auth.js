const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

require('../db/connection');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send("This is home from auth.js!");
});

// signup route
router.post('/signup', async (req, res) => {
    // get info from body
    const { username, email, password, cpassword } = req.body;
    // validation
    if (!username || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Fill the input filed properly!" });
    }

    try {
        // already existance
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exists!" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password isn't matched!" });
        } else {
            // If not already exists then store all info into a variable
            const user = new User({ username, email, password, cpassword });
            // write a function for hashing the password before call save() method
            await user.save();
            res.status(201).json({ message: "Registration successfully done!" });
        }
    } catch (err) {
        console.log(err);
    }
});

// signin route
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Please fill the credentials!" });
        }
        // compare the credentials
        const userLogin = await User.findOne({ username });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            // jwt varification using anonymus function
            token = await userLogin.generateAuthToken();
            // store token in cookie
            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials!" });
            } else {
                res.status(201).json({ message: "Sign in successful, Redirecting..." });
            }
        } else {
            res.status(400).json({ error: "Invalid credentials!" });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;