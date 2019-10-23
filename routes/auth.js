const express = require('express');

const User = require('../models/User')

const bcrypt = require('bcryptjs')

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', async(req, res) => {
    let { email, password } = req.body;
    let foundUser = use.findOne({ email: email })
    if (!founduser) {
        res.redirect('/signup')
    }
    let isMatch = await bcrypt.compare(password, foundUser.password)
    if (!isMatch) {
        res.redirect('back')
    } else {
        req.session.isLoggedIn = true;
        req.session.user = foundUser;
        await req.session.save()
        return res.redirect("/")
    }

})
router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', async(req, res) => {
    let foundUser = await User.findOne({
        email: email
    })
    if (foundUser) {
        //TODO; remember to add flash message
        return res.redirect("/login")
    } else {
        let hashedPwd = await bcrypt.hash(password, 12)
        if (hashedPwd) {
            const newUser = new User({
                companyName,
                email,
                password: hashedPwd
            })
            await newUser.save()
            return res.redirect("/login")
        }

    }
})



module.exports = router