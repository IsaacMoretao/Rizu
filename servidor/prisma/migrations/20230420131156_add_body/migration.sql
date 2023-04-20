-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avatarUrl" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "pants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
    "code" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
CREATE TABLE "budget" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gmail" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "numeroDoCartao" TEXT NOT NULL,
    "nomeNoCartao" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "codigoSeguranca" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tshirts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
CREATE TABLE "blouses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
CREATE TABLE "dresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
CREATE TABLE "accessories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pieceUrl" TEXT,
    "tipe" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "finalPurchase" (
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
    "partId" TEXT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pants_code_key" ON "pants"("code");

-- CreateIndex
CREATE UNIQUE INDEX "shirt_code_key" ON "shirt"("code");

-- CreateIndex
CREATE UNIQUE INDEX "tshirts_code_key" ON "tshirts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "blouses_code_key" ON "blouses"("code");

-- CreateIndex
CREATE UNIQUE INDEX "dresses_code_key" ON "dresses"("code");

-- CreateIndex
CREATE UNIQUE INDEX "accessories_code_key" ON "accessories"("code");
