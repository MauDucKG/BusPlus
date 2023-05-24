const webFramework = require("express");
const router = webFramework.Router();

const {
    verifyUserWithJwt,
    verifyUserWithLocal
  } = require("../utils/authenticate");
const userController = require("./user.controller");

// router.get("/", UserController.getAllUser);
// router.get("/:id", UserController.getUserById);

router.post("/register", userController.register);
router.post("/login", verifyUserWithLocal, userController.login);
router.post("/refreshToken", userController.refreshToken);
router.get("/logout", verifyUserWithJwt, userController.logout);
router.get("/me", verifyUserWithJwt, (req, res) => {
  res.send(req.user);
});

module.exports = router;