/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `finalPrice` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "finalPrice" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payment_userId_key" ON "Payment"("userId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
