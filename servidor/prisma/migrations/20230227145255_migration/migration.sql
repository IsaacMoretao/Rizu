-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shirt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "pieceUrl" TEXT,
    "tipe" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "quantityPP" INTEGER,
    "quantityP" INTEGER,
    "quantityM" INTEGER,
    "quantityG" INTEGER,
    "quantityGG" INTEGER
);
INSERT INTO "new_shirt" ("code", "description", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title") SELECT "code", "description", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title" FROM "shirt";
DROP TABLE "shirt";
ALTER TABLE "new_shirt" RENAME TO "shirt";
CREATE UNIQUE INDEX "shirt_code_key" ON "shirt"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
