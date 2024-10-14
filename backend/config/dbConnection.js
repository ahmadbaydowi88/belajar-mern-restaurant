import mongoose from "mongoose";

export const dbConnection = async ()=>{
    await mongoose.connect(process.env.MONGO_URL, {
        dbName: "RESTAURANT",
    }).then(()=>{
        console.log("Connection to database successfully!")
    }).catch(err=>{
        console.log(`Some error occored while connecting to database! ${err}`);
        process.exit(1);
    });
}
