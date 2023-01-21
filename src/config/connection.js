import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()



const setDbConnection = () => {

  mongoose.set('strictQuery', true)


  mongoose
  .connect(process.env.MONGODBLINK, {dbName: process.env.DBNAME})
  .then(console.log("Database Connection established successfully"))
  .catch((err) => console.log(err));

}



export default  setDbConnection
