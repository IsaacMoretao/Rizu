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
CREATE TABLE "finalPurchase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantityPP" INTEGER,
    "quantityP" INTEGER,
    "quantityM" INTEGER,
    "quantityG" INTEGER,
    "quantityGG" INTEGER,
    "quantityI" INTEGER,
    "quantityII" INTEGER,
    "quantityIII" INTEGER,
    "quantityIIII" INTEGER,
    "quantityV" INTEGER,
    "quantityIV" INTEGER,
    "quantityIIV" INTEGER,
    "quantityIIIV" INTEGER,
    "quantityIIIIV" INTEGER,
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
