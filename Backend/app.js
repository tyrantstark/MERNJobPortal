import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
import userRouter from "./routes/userRouter.js"
import applicationRouter from "./routes/applicationRouter.js"
import jobRouter from "./routes/jobRouter.js"
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./middleware/error.js"

const app=express()
dotenv.config({path:"./config/config.env"})
//app.use(cors());
app.use((req, res, next) => {
    
    res.header("Access-Control-Allow-Origin",'https://mern-job-portal-y2jc.vercel.app' );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true"); 
  
    
    next();
  });
// const cors = require('cors');
// const corsOptions ={
//     origin:'https://mern-job-portal-y2jc.vercel.app', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
  
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));
app.use("/api/v1/user",userRouter);
app.use("/api/v1/application",applicationRouter);
app.use("/api/v1/job",jobRouter);
dbConnection();


app.use(errorMiddleware);
export default app;
