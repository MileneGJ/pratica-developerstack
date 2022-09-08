import { prisma } from "../config/database"
import { IAnswerDB, TAnswerBody } from "../types/answerTypes"

export async function findByAnswerAuthorAndQuestion(answer: TAnswerBody,questionId:number):Promise<IAnswerDB> {
    const answerDB = await prisma.answers.findFirst({
        where: {
            AND: [
                {
                    answeredBy: answer.answeredBy
                }, {
                    answer: answer.answer
                }, {
                    questionId
                }]
        }
    })
return answerDB as IAnswerDB
}

export async function insert (answer:TAnswerBody,questionId:number) {
    await prisma.answers.create({data:{
        answeredBy:answer.answeredBy,
        answer:answer.answer,
        questionId
    }})
}