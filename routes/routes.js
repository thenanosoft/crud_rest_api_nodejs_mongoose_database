const express = require("express");
const router = express.Router();
const UserModel = require("../model/UserModel")

router.get('/', (req, res) => {
    res.send("<center><h1>CRUD REST API</h1></center>")
})

router.get("/show/" , async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users)   
    } catch (error) {
        console.log(error)
    }
})

router.post("/create", (req, res, next) => {
    const user = new UserModel({
        title:req.body.title,
        description:req.body.description
    })

    user.save().then(data=>res.send(data)).catch(err=>console.error(err, "failed to save data"))
})

router.get("/find/:userId", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId);
        res.json(user)
    } catch (error) {
        res.json({message:error})
    }
})

router.patch("/update/:userId", async (req, res) => {
    try {
        const user = await UserModel.updateOne({_id:req.params.userId}, {$set:{title:req.body.title, description:req.body.description}});
        res.json(user)
    } catch (error) {
        res.json({message:error})
    }
})

router.delete("/delete/:userId", async (req, res) => {
    try {
        const user = await UserModel.deleteOne({_id:req.params.userId});
        res.json(user)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;