/*
  Warnings:

  - You are about to drop the column `description` on the `shirt` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shirt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT,
    "title" TEXT NOT NULL,
    "pieceUrl" TEXT,
    "tipe" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "quantityPP" INTEGER,
    "quantityP" INTEGER,
    "quantityM" INTEGER,
    "quantityG" INTEGER,
    "quantityGG" INTEGER
);
INSERT INTO "new_shirt" ("code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title") SELECT "code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title" FROM "shirt";
DROP TABLE "shirt";
ALTER TABLE "new_shirt" RENAME TO "shirt";
CREATE UNIQUE INDEX "shirt_code_key" ON "shirt"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
