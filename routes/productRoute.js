import express from "express";
import formidable from "express-formidable";
import { isAdmin, verifyJWT } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  categoryProductsController,
  createProductController,
  deleteProductController,
  getAllProductsController,
  getOneProductController,
  getProductImageController,
  productCountController,
  productFilterController,
  productListController,
  searchProductController,
  similarProductController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

router.post(
  "/create-product",
  verifyJWT,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:productId",
  verifyJWT,
  isAdmin,
  formidable(),
  updateProductController
);

router.get("/get-products", getAllProductsController);

router.get("/get-product/:slug", getOneProductController);

router.get("/get-product-image/:productId", getProductImageController);

router.delete(
  "/delete-product/:productId",
  verifyJWT,
  isAdmin,
  deleteProductController
);

router.post("/product-filter", productFilterController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

router.get(
  "/similar-products/:categoryId/:productId",
  similarProductController
);

router.get("/category-products/:slug", categoryProductsController);

router.get("/braintree/token", braintreeTokenController);

router.post("/braintree/payment", verifyJWT, braintreePaymentController);

export default router;
