-- CreateTable
CREATE TABLE "check" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(20) NOT NULL,
    "lastName" VARCHAR(20) NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "otp" VARCHAR(10) NOT NULL,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "check_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(20) NOT NULL,
    "lastName" VARCHAR(20) NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "otp" VARCHAR(10) NOT NULL,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mounth" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mounth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hazira" VARCHAR(5) NOT NULL,
    "rate" VARCHAR(4) NOT NULL,
    "mot" VARCHAR(10) NOT NULL,
    "khoraki" VARCHAR(10) NOT NULL,
    "barti" VARCHAR(10) NOT NULL,
    "gotoMAs" VARCHAR(10) NOT NULL DEFAULT '',
    "motAll" VARCHAR(20) NOT NULL,
    "mounthId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "create" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "check_email_key" ON "check"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "mounth" ADD CONSTRAINT "mounth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_mounthId_fkey" FOREIGN KEY ("mounthId") REFERENCES "mounth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
