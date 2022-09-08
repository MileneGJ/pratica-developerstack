/*
  Warnings:

  - A unique constraint covering the columns `[answeredBy,answer,questionId]` on the table `Answers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Answers_answeredBy_answer_key";

-- CreateIndex
CREATE UNIQUE INDEX "Answers_answeredBy_answer_questionId_key" ON "Answers"("answeredBy", "answer", "questionId");
