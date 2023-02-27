/*
  Warnings:

  - You are about to drop the column `description` on the `blouses` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Tshirts` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `pants` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blouses" (
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
INSERT INTO "new_blouses" ("code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title") SELECT "code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title" FROM "blouses";
DROP TABLE "blouses";
ALTER TABLE "new_blouses" RENAME TO "blouses";
CREATE UNIQUE INDEX "blouses_code_key" ON "blouses"("code");
CREATE TABLE "new_Tshirts" (
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
INSERT INTO "new_Tshirts" ("code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title") SELECT "code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title" FROM "Tshirts";
DROP TABLE "Tshirts";
ALTER TABLE "new_Tshirts" RENAME TO "Tshirts";
CREATE UNIQUE INDEX "Tshirts_code_key" ON "Tshirts"("code");
CREATE TABLE "new_pants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pieceUrl" TEXT,
    "tipe" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "quantityI" INTEGER,
    "quantityII" INTEGER,
    "quantityIII" INTEGER,
    "quantityIIII" INTEGER,
    "quantityV" INTEGER,
    "quantityIV" INTEGER,
    "quantityIIV" INTEGER,
    "quantityIIIV" INTEGER,
    "quantityIIIIV" INTEGER
);
INSERT INTO "new_pants" ("code", "id", "pieceUrl", "priceInCents", "quantityI", "quantityII", "quantityIII", "quantityIIII", "quantityIIIIV", "quantityIIIV", "quantityIIV", "quantityIV", "quantityV", "tipe", "title") SELECT "code", "id", "pieceUrl", "priceInCents", "quantityI", "quantityII", "quantityIII", "quantityIIII", "quantityIIIIV", "quantityIIIV", "quantityIIV", "quantityIV", "quantityV", "tipe", "title" FROM "pants";
DROP TABLE "pants";
ALTER TABLE "new_pants" RENAME TO "pants";
CREATE UNIQUE INDEX "pants_code_key" ON "pants"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
