import { prisma } from "../config/database";
import { IAnswerDB } from "../types/answerTypes";
import { IQuestionDB, IQuestionReturnedOne, TQuestionBody, TQuestionReturnedAll } from "../types/questionTypes";

export async function findByQuestionAndAuthor(question: TQuestionBody): Promise<IQuestionDB> {
    const questionDB = await prisma.questions.findFirst({
        where: {
            AND: [
                {
                    askedBy: question.askedBy
                }, {
                    question: question.question
                }]
        }
    })
    return questionDB as IQuestionDB
}

export async function insert(question: TQuestionBody) {
    await prisma.questions.create({
        data: {
            askedBy: question.askedBy,
            question: question.question
        }
    })
}

export async function findAll():Promise<TQuestionReturnedAll[]> {
    const questions = await prisma.questions.findMany({
        select: {
            id: true,
            askedBy: true,
            question: true
        }
    })
    return questions
}

export async function findById(id: number):Promise<IQuestionReturnedOne> {
    const question = await prisma.questions.findUnique({
        where: { id },
        select: {
            id: true,
            askedBy: true,
            question: true,
            answers: {
                select: {
                    answeredBy: true,
                    answer: true
                }
            }
        }
    })
    return question as IQuestionReturnedOne
}