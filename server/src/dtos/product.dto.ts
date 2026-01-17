import { z } from "zod";

export const productListQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),

  category: z.string().optional(),
  q: z.string().optional(),
  sort: z
    .enum(["price_asc", "price_desc", "newest", "oldest"])
    .optional(),

  minPrice: z.coerce.number().int().nonnegative().optional(),
  maxPrice: z.coerce.number().int().nonnegative().optional(),
});
