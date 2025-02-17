const {error}=require('console');
const express=require('express');
const app=express();
const port=8000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello,the server is running");

})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})
app.post('/signup',(req,res)=>{
    const{username,email,password,dataOfBirth}=req.body;
    if(!username){
        return res.status(400).json({
            error:"Username cannot be empty"
        });

    }
    if(!email){
        return res.status(400).json({
            error:"Email cannot be empty"
        })
    }
    if(!password){
        return res.status(400).json({
            error:"Password cannot be empty"
        })
    }
    if(password.length>8&&password.length<=16){
        return res.status(400).json({
            error:"Password length should be greater than 8 or less than or equal to 16"
        })
    }
    if(!dataOfBirth){
        return res.status(400).json({
            error:"DateOfBirth cannot be empty"
        })
    }
    return res.status(201).json({
        message:"User signed up successfully",
        user:{
            username,
            email,
            dateOfbirth,
        }
    })
})