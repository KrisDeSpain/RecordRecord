const express = require("express");
const path = require("path");
const router = express.Router();
const userRoute = require("./Server/Routes/userRoute");

router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "Public/Pages", "index.html"))
})
.get("/Home", (req, res) =>{
    res.sendFile(path.join(__dirname, "Public/Pages", "index.html"))
})
.get("/Login", (req, res) =>{
    res.sendFile(path.join(__dirname, "Public/Pages", "login.html"))
})
.get("/Collection", (req, res) =>{
    res.sendFile(path.join(__dirname, "Public/Pages", "collection.html"))
})
.get("/Wishlist", (req, res) =>{
    res.sendFile(path.join(__dirname, "Public/Pages", "wishlist.html"))
})
.get("/Profile", (req, res) =>{
    res.sendFile(path.join(__dirname, "Public/Pages", "profile.html"))
})

.post("/Login", (req, res) => {
    return res.redirect(307, "/user/login")
})
.post("/Register", (req, res) => {
    return res.redirect(307, "/user/register")
})

module.exports = router;