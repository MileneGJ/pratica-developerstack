export interface IAnswerDB {
    id:number;
    answeredBy: string;
    answer: string;
    questionId: number;
    createdAt: Date;
}

export type TAnswerBody = Omit<IAnswerDB,'id'| 'createdAt'|'questionId'>

export type TAnswerInsertToDB = Omit<IAnswerDB, 'id' | 'createdAt'>