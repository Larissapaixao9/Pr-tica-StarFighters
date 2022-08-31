import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mainRouter from './routes/mainRoute'
const app = express();
dotenv.config()

//middlewares
app.use(express.json())
app.use(cors())
app.use(mainRouter)


const PORT = process.env.PORT

app.listen(PORT,()=>console.log(`LISTENING ON ${PORT}`))