import express, { Router } from 'express'

const teamRouter = Router()

teamRouter.post('/create',(req,res)=>{
    res.send("team created successfully")
})

export default teamRouter; 