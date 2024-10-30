/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_userId_fkey";

-- AlterTable
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tasks_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
