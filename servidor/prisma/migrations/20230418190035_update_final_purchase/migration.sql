/*
  Warnings:

  - You are about to drop the column `quantityG` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityGG` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityI` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityII` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIII` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIIII` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIIIIV` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIIIV` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIIV` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIV` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityM` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityP` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityPP` on the `finalPurchase` table. All the data in the column will be lost.
  - You are about to drop the column `quantityV` on the `finalPurchase` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_finalPurchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantitPP" INTEGER,
    "quantitP" INTEGER,
    "quantitM" INTEGER,
    "quantitG" INTEGER,
    "quantitGG" INTEGER,
    "quantitI" INTEGER,
    "quantitII" INTEGER,
    "quantitIII" INTEGER,
    "quantitIIII" INTEGER,
    "quantitV" INTEGER,
    "quantitIV" INTEGER,
    "quantitIIV" INTEGER,
    "quantitIIIV" INTEGER,
    "quantitIIIIV" INTEGER,
    "gmail" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "cardNumber" TEXT NOT NULL,
    "nameOnCard" TEXT NOT NULL,
    "expiryMonth" INTEGER NOT NULL,
    "expiryYear" INTEGER NOT NULL,
    "securityCode" INTEGER NOT NULL,
    "holderSCpf" INTEGER NOT NULL
);
INSERT INTO "new_finalPurchase" ("address", "cardNumber", "complement", "expiryMonth", "expiryYear", "gmail", "holderSCpf", "id", "nameOnCard", "number", "securityCode") SELECT "address", "cardNumber", "complement", "expiryMonth", "expiryYear", "gmail", "holderSCpf", "id", "nameOnCard", "number", "securityCode" FROM "finalPurchase";
DROP TABLE "finalPurchase";
ALTER TABLE "new_finalPurchase" RENAME TO "finalPurchase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
