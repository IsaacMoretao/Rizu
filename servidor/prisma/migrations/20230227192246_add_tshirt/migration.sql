/*
  Warnings:

  - You are about to drop the `Tshirts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tshirts";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "tshirts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pieceUrl" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "quantityPP" INTEGER,
    "quantityP" INTEGER,
    "quantityM" INTEGER,
    "quantityG" INTEGER,
    "quantityGG" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "tshirts_code_key" ON "tshirts"("code");
