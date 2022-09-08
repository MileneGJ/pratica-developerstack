import { TQuestionBody } from "../types/questionTypes";
import * as questionRepository from '../repositories/questionRepository'

export async function newQuestion (question:TQuestionBody) {
    await checkRepeatedQuestion(question)
    await questionRepository.insert(question)
}

async function checkRepeatedQuestion (question:TQuestionBody) {
    const foundQuestion = await questionRepository.findByQuestionAndAuthor(question)
    if(foundQuestion) {
        throw {type:'conflict'}
    }
}

export async function getAll () {
    const questions = await questionRepository.findAll()
    return {questions}
}

export async function getById (questionId:number) {
    const question = await questionRepository.findById(questionId)
    if(!question) {
        throw {type:'not_found'}
    }
    return question
}