import mongoose from "mongoose";

const Con = async(username,password) => {   
    const URL = `mongodb+srv://${username}:${password}@trial-db.cn0wkyc.mongodb.net/?retryWrites=true&w=majority`    
    try{
       await mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})
       console.log("Database connected Successfully")
    }catch(error){
        console.log("Error connecting to database",error);
    }
}

export default Con;

