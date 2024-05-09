import mongoose from "mongoose";

 export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN_STACK_JOB_SEEKING",
    }).then(()=>{
        console.log("Database Connected")
    }).catch((err)=>{
        console.log(`error in Connection:${err}`)
    })
}