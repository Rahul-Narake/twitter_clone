/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "verificationCode" DROP NOT NULL,
ALTER COLUMN "verificationCodeExpiry" DROP NOT NULL;
