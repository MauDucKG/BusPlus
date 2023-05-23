const Order = require("./order.model");

class OrderController {
  async getAllOrdersByUserId(req, res) {
    Order.find({ userId: req.user._id })
      .then((orders) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving all the orders with userId.",
          orders: orders,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving all the orders with userId.",
        });
      });
  }

  async getOrderByUserId(req, res) {
    const orderId = req.params.orderId;
    Order.find({ id: orderId, userId: req.user._id })
      .then((order) => {
        res.status(200).json({
          sucess: true,
          msg: "Successful in retrieving the order.",
          order: order,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while retrieving the order.",
        });
      });
  }

  async createOrder(req, res) {
    const {
      name,
      status,
      rate,
      price,
    } = req.body;

    const newOrder = new Order({
      userId: req.user._id,
      name: name,
      status: status,
      rate: rate,
      price: price,
    });
    newOrder
      .save()
      .then((result) => {
        res.status(200).json({ success: true, msg: "Order added" });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          msg: "Encountered an error while adding this order. Please, try again.",
        });
      });
  }

  async updateOrder(req, res) {
    const {
      name,
      status,
      rate,
      price,
    } = req.body;

    Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          name: name,
          status: status,
          rate: rate,
          price: price,
        },
      }
    )
      .then((result) => {
        res.status(200).json({ success: true, msg: "Order updated" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while editing this order. Please, try again.",
        });
      });
  }

  async deleteOrder(req, res) {
    const orderId = req.params.orderId;
    Order.deleteOne({ _id: orderId })
      .then((result) => {
        res.status(200).json({ success: true, msg: "Order deleted" });
      })
      .catch((err) => {
        res.status(500).json({
          sucess: false,
          msg: "Encountered an error while deleting this order. Please, try again.",
        });
      });
  }
}

module.exports = new OrderController();
