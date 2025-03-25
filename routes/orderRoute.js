import express from "express";
import { isAdmin, verifyJWT } from "../middlewares/authMiddleware.js";
import {
  changeOrderStatusController,
  checkOutController,
  getAllAdminOrdersController,
  getAllOrdersController,
  getOrderController,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/orders", verifyJWT, getAllOrdersController);

router.get("/order/:orderId", verifyJWT, getOrderController);

router.get("/admin-orders", verifyJWT, isAdmin, getAllAdminOrdersController);

router.put(
  "/change-order-status/:orderId",
  verifyJWT,
  isAdmin,
  changeOrderStatusController
);

router.post("/checkout", verifyJWT, checkOutController);

export default router;
