import { TAnswerBody } from "./answerTypes";

export interface IQuestionDB {
    id:number;
    askedBy: string;
    question: string;
    createdAt: Date;
}

export type TQuestionBody = Omit<IQuestionDB,'id'| 'createdAt'>

export type TQuestionReturnedAll = Omit<IQuestionDB, 'createdAt'>

export interface IQuestionReturnedOne {
    id:number;
    askedBy: string;
    question: string;
    answers: TAnswerBody[]
}