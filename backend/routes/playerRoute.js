import { Router } from 'express'

const playerRouter = Router()

playerRouter.post('/create',(req,res)=>{
    res.send("player created successfully")
})


export default playerRouter;