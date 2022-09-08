import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from '../services/answerService'

export async function createQuestion(req: Request, res: Response) {
  await questionService.newQuestion(req.body)
  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const {id} = req.params
  await answerService.newAnswer(req.body,Number(id))
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAll()
  res.status(200).send(questions)
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params
  const question = await questionService.getById(Number(id))
  res.status(200).send(question)
}
