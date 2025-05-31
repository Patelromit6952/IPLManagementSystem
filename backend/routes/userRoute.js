import  { Router } from "express";

const userRouter = Router()

userRouter.post('/create',(req,res)=>{    
    res.send("User Created Successfully")
})


export default  userRouter;