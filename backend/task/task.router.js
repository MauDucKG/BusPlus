const  webFramework = require("express");
const router = webFramework.Router();

const TaskController = require("./task.controller");

router.get("/", TaskController.getAllTask);
router.post("/", TaskController.newtask);
router.put("/", TaskController.edittask);
router.delete("/", TaskController.deletetask);

module.exports = router;