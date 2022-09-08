import { TAnswerBody } from "../types/answerTypes";
import * as answerRepository from '../repositories/answerRepository'
import * as questionService from './questionService'

export async function newAnswer(answer:TAnswerBody,questionId:number) {
    await questionService.getById(questionId)
    await checkRepeatedAnswer(answer,questionId)
    await answerRepository.insert(answer,questionId)
}

async function checkRepeatedAnswer (answer:TAnswerBody, questionId:number) {
    const foundAnswer = await answerRepository.findByAnswerAuthorAndQuestion(answer,questionId)
    if(foundAnswer&&foundAnswer.questionId===questionId) {
        throw {type:'conflict'}
    }
}