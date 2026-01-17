-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" TEXT,
ADD COLUMN     "discountPercent" INTEGER,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "originalPrice" INTEGER,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "reviews" INTEGER;

-- CreateIndex
CREATE INDEX "Product_brand_idx" ON "Product"("brand");

-- CreateIndex
CREATE INDEX "Product_rating_idx" ON "Product"("rating");
