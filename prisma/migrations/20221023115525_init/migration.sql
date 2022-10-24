-- CreateTable
CREATE TABLE "Sales" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "value" BIGINT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);
