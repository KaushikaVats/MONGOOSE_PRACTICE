const mongoose = require('mongoose')  //1st require mongoose so that we can talk with mongodb
//connect with the MONGODB
mongoose.connect("mongodb://localhost/user123_db") //this the way to connect with the mongodb where user_db is the name of the database 
const user = require('./models/users.models')
const db = mongoose.connection;
const address = require("./models/userAddress.model")
db.once("open" , ()=>{
    console.log("CONNECTED TO DB ");
    //insert some users
    createUser();
    //fetchUser()
   // updateUserInfo();
   //deleteUser();
})

db.on("error",(err)=>{
    console.log("error while connecting to the DB",err);
    
})
const obj123 = {
    name:"Neelam Singh",
    age:39,
    email:"neelamAgmail.com",
    address:{
        lane:"Main Road",
        Street: "Chandni chowk",
        city:"Ranchi",
        country:"India"
    }
   }

async function createUser(){
   //logic to nsert document inside the DB
   
   try{
    const object = await user.create(obj123)
    console.log("SUCCESSFULLY CREATED THE USER" , object);
    
   }catch(error){
    console.log("ERROR !");
    
   }
   

}

 async function fetchUser(){  //reading data/users
    // const object =  await user.findById('676051ed03a276d9c931ee6e')
    // console.log(object);
    
    //finding the user by name
    // try{
    //     const object = await  user.find({name: "Vishwa"});
    //     console.log(object);
        
    // }catch(error){
    //     console.log("ERROR " , error);
        
    // }
    try{
        const object = await user.where('age').gt("70").where("name").equals("Vishwa").limit(2)
        console.log(object);
        
    }catch(error){
        console.log("ERROR " , error);
        
    }
    
} 

async function updateUserInfo(){
    try{
        const object = await user.findOne({name:"Vishwa Mohan Singh"})
        object.hobby = "cricket"
        const updated_user = await object.save()
        console.log(updated_user);
        
    }catch(err){
        console.log(err);
        
    }
  
}

 async function deleteUser(){
    const object =await user.deleteOne({name:"Vishwa Mohan Singh"})
    console.log(object);
    const users = await user.find({name: "Vishwa Mohan Singh"})
    console.log(users);
    
    

}