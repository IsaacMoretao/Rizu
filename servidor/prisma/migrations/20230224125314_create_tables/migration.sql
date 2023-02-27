-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "pants" (
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

-- CreateTable
CREATE TABLE "shirt" (
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

-- CreateTable
CREATE TABLE "Tshirts" (
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

-- CreateTable
CREATE TABLE "blouses" (
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
CREATE UNIQUE INDEX "pants_code_key" ON "pants"("code");

-- CreateIndex
CREATE UNIQUE INDEX "shirt_code_key" ON "shirt"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Tshirts_code_key" ON "Tshirts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "blouses_code_key" ON "blouses"("code");
