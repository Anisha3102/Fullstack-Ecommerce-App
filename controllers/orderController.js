
import chalk from "chalk";

import orderModel from "../models/orderModel.js";


export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req?.user?._id })
      .populate("products", "-image")
      .populate("buyer", "name");

    res.status(200).send({
      success: true,
      message: "All orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.log(chalk.red(error));

    res.status(500).send({
      success: false,
      message: "Error in fetching all orders",
      error,
    });
  }
};

export const getOrderController = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await orderModel
      .findById(orderId)
      .populate("products", "-image");

    res.status(200).send({
      success: true,
      message: "Order fetched successfully",
      order,
    });
  } catch (error) {
    console.log(chalk.red(error));

    res.status(500).send({
      success: false,
      message: "Error in fetching order",
      error,
    });
  }
};

export const getAllAdminOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("products", "-image")
      .populate("buyer", "name")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      message: "All orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.log(chalk.red(error));

    res.status(500).send({
      success: false,
      message: "Error in fetching all orders",
      error,
    });
  }
};

export const changeOrderStatusController = async (req, res) => {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Order status changed successfully",
      order,
    });
  } catch (error) {
    console.log(chalk.red(error));

    res.status(500).send({
      success: false,
      message: "Error in changing the status",
      error,
    });
  }
};

export const checkOutController = async (req, res) => {
  try {
    const { cart } = req.body;
    const order = await orderModel.create({
      product: cart,
      payment: "success",
      buyer: req.user._id
       })
      
    res.status(200).send({
      success: true,
      message: "payment successful",
      order,
    })
  } catch (error) {
    console.log(chalk.red(error));

    res.status(500).send({
      success: false,
      message: "Error in checkout",
      error,
    });
  }
}