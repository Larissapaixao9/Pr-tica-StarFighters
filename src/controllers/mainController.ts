import express from "express";
import { Request, Response } from "express";
import { axiosrequest } from "../services/mainService";
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
   const { firstUser } = req.body;
   const statusaxios = await axiosrequest(firstUser);
   if(statusaxios==200){
       console.log('usuario existe');
   }
   else console.log('usuario não existe')
    return res.sendStatus(200)
}