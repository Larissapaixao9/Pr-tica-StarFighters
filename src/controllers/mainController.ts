import express from "express";
import { Request, Response } from "express";
import Joi from 'joi'

const schema = Joi.object({
    // Joi validation
    firstUser: Joi.string().required().trim(),
    secondUser:Joi.string().required().trim()
})

export async function battle(req:Request,res:Response){
    const validation = schema.validate(req.body);
    const { error } = validation;
    if(error){
        return res.status(422).send(error)
   }
    return res.sendStatus(200)
}