-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_stayId_fkey";

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "stayId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_stayId_fkey" FOREIGN KEY ("stayId") REFERENCES "Stay"("id") ON DELETE SET NULL ON UPDATE CASCADE;
