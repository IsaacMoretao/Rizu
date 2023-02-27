-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blouses" (
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
INSERT INTO "new_blouses" ("code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title") SELECT "code", "id", "pieceUrl", "priceInCents", "quantityG", "quantityGG", "quantityM", "quantityP", "quantityPP", "tipe", "title" FROM "blouses";
DROP TABLE "blouses";
ALTER TABLE "new_blouses" RENAME TO "blouses";
CREATE UNIQUE INDEX "blouses_code_key" ON "blouses"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
