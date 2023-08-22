const express = require("express")
const {home,createuser, getUsers, deleteUser,editUser} = require("../controllers/userController.js")
const router = express.Router();

router.get("/",home);
router.post("/createuser",createuser)
router.get("/getusers",getUsers)
router.delete('/deleteuser/:id',deleteUser)
router.put('/editUser/:id',editUser);


module.exports = router;