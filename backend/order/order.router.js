const webFramework = require("express");
const router = webFramework.Router();
const {
    verifyUserWithJwt,
    verifyUserWithLocal
  } = require("../utils/authenticate");
const orderController = require("./order.controller");

router.get("/all", verifyUserWithJwt, orderController.getAllOrdersByUserId);
router.get("/:orderId", verifyUserWithJwt, orderController.getOrderByUserId);
router.post("/create", verifyUserWithJwt, orderController.createOrder);
router.patch("/:orderId/update", verifyUserWithJwt, orderController.updateOrder);
router.delete("/:orderId/delete", verifyUserWithJwt, orderController.deleteOrder);

module.exports = router;
