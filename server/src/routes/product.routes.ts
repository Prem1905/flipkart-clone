import { Router } from "express";
import { fetchProducts, fetchProductById } from "../controllers/product.controller";

const router = Router();

router.get("/", fetchProducts);
router.get("/:id", fetchProductById);

export default router;
