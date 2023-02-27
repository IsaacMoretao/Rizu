-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tshirts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
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
INSERT INTO "new_tshirts" ("code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title") SELECT "code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title" FROM "tshirts";
DROP TABLE "tshirts";
ALTER TABLE "new_tshirts" RENAME TO "tshirts";
CREATE UNIQUE INDEX "tshirts_code_key" ON "tshirts"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
