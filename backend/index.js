import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import ConnectTOdb from "./utils/database.js";
import userRouter from "./router/user.route.js";
import companyRouter from "./router/company.route.js";
import jobRouter from "./router/job.route.js";
import applicationRouter from "./router/application.route.js";
dotenv.config({});


const app = express();

app.get('/',(req,res)=>{
    return res.json('hello user')
})

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
const corsOption ={
      origin:'http://Localhost:5173',
      credentials:true
}
app.use(cors(corsOption))

const PORT= process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRouter)
app.use("/api/v1/company", companyRouter)
app.use("/api/v1/job", jobRouter)
app.use("/api/v1/application", applicationRouter)

app.listen(PORT,()=>{
    ConnectTOdb()
    console.log(`server running at http://localhost:${PORT}`);
    
})