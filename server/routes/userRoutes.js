const {login, register, getAllUsers, setAvatar} = require("../controllers/userController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.post("/setAvatar/:id", setAvatar);
  router.get("/allusers/:id", getAllUsers);
  module.exports = router;