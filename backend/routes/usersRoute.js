const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

router.post('/register', async(req,res) => {
    try{
        const userExists = await User.findOne({userName: req.body.userName})
        if(userExists){
            return res.send({
                success:false,
                message: 'user already exists'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;

        const user = new User(req.body)
        await user.save()

        return res.send({
            success: true,
            message: "User registered successfully"
        })

    } catch (error){
        return res.send({
            success: false,
            message: error.message
        })
    }
})

router.post('login', async(req, res) => {
    try{
        const user = await User.findOne({ userName: req.body.userName })
        if(!user){
            return res.send({
                success: false,
                message: "User not found"
            })
        }

        //compare password
        const validPassword = await bcrypt.compare(req.body.password, userPassword)
        if(!validPassword){
            return res.send({
                success: false,
                message: "Invalid Password"
            })
        }

        //generate token
        const token = jwt.sign(
            {userId: user._id},
            process.env.jwt_secret,
            {expiresIn: '1d'}
        )

        return res.send({
            success: true,
            message: "User loggedin successfully",
            data: token
        })

    } catch(error){
        return res.send({
            success: false,
            message: error.message
        })

    }
})

module.exports = router;