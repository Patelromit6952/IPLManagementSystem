import express from 'express'
import dotenv from 'dotenv'
import playerRouter from './routes/playerRoute.js';
import teamRouter from './routes/teamRoute.js';
import userRouter from './routes/userRoute.js';

const server = express();
dotenv.config()
const PORT = process.env.PORT || 8000;

server.use('/api/user',userRouter)
server.use('/api/player',playerRouter)
server.use('/api/team',teamRouter)

server.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
    
})