import prisma from "../prisma";
import { Prisma } from "@prisma/client";

export const getAllProducts = async (
  page: number,
  limit: number,
  category?: string,
  q?: string,
  sort?: string,
  minPrice?: number,
  maxPrice?: number
) => {
  const skip = (page - 1) * limit;

  const where: Prisma.ProductWhereInput = {};

  // 1️⃣ Category filter
  if (category) {
    where.category = category;
  }

 // 2️⃣ Search filter (category-aware)
if (q) {
  const normalizedQ = q.toLowerCase();

  const phoneSynonyms =
    normalizedQ === "phone"
      ? ["phone", "iphone"]
      : [normalizedQ];

  where.OR = phoneSynonyms.flatMap((term) => [
    {
      title: {
        contains: term,
        mode: "insensitive",
      },
    },
    {
      description: {
        contains: term,
        mode: "insensitive",
      },
    },
  ]);
}

  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {};
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {
      ...(minPrice !== undefined ? { gte: minPrice } : {}),
      ...(maxPrice !== undefined ? { lte: maxPrice } : {}),
    };
  }



  // 3️⃣ Sorting
  let orderBy: Prisma.ProductOrderByWithRelationInput = {
    createdAt: "desc",
  };

  switch (sort) {
    case "price_asc":
      orderBy = { price: "asc" };
      break;
    case "price_desc":
      orderBy = { price: "desc" };
      break;
    case "oldest":
      orderBy = { createdAt: "asc" };
      break;
    case "newest":
    default:
      orderBy = { createdAt: "desc" };
  }

const [items, total] = await Promise.all([
  prisma.product.findMany({
    where,
    skip,
    take: limit,
    orderBy,
  }),
  prisma.product.count({ where }),
]);

const totalPages = Math.ceil(total / limit);

return {
  items,
  page,
  limit,
  total,
  totalPages,
  hasNextPage: page < totalPages,
  hasPrevPage: page > 1,
  
};

};


export const getProductById = async (id: number) => {
  return prisma.product.findUnique({
    where: { id },
  });
};
