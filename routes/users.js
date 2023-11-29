const express = require("express");
const router = express.Router();
const userController = require("../controller/users.js");

//create - Post
router.post("/", userController.createNewUser);

// Read -Get
router.get("/", userController.getAllUsers);

//update -Patch
router.patch("/:idUser", userController.updateUsers);

//delete -delete
router.delete("/:idUser", userController.deleteUsers);

module.exports = router;
