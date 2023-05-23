const taskModel = require("./task.model");

class taskController {
  getAllTask(request, respond) {
    taskModel
      .find()
      .exec()
      .then((tasks) => {
        respond.status(200).json({
          success: true,
          message: "Done!",
          tasks: tasks,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  newtask = async function (req, res) {
    const { title, location, note, important } = req.body;
    const task = new taskModel({
      title,
      location,
      note,
      important,
    });
    try {
      await task.save();
      res.status(200).send("New task created!");
    } catch (error) {
      res.status(500).send(error);
    }
  };

  edittask = async function (req, res) {
    const { _id, title, location, note, important } = req.body;
    try {
      await taskModel.findByIdAndUpdate(
        { _id },
        { title, location, note, important }
      );
      res.status(200).send("Update done");
    } catch (error) {
      res.status(500).send(error);
    }
  };

  deletetask = async function (req, res) {
    const { _id } = req.body;
    try {
      await taskModel.findByIdAndRemove(
        { _id },
      );
      res.status(200).send("Delete done");
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

module.exports = new taskController();
