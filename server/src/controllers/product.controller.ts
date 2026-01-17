import { Request, Response } from "express";
import { getAllProducts, getProductById } from "../services/product.service";
import { productListQuerySchema } from "../dtos/product.dto";


export const fetchProducts = async (req: Request, res: Response) => {
  const parsed = productListQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid query parameters",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  const {
    page,
    limit,
    category,
    q,
    sort,
    minPrice,
    maxPrice,
  } = parsed.data;

  const result = await getAllProducts(
    page,
    limit,
    category,
    q,
    sort,
    minPrice,
    maxPrice
  );

  res.json(result);
};




export const fetchProductById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  const product = await getProductById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};


