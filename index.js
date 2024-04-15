const express=require("express");
const app=express();
const PORT=process.env.PORT || 8000;

app.get("/",(req,res)=>{
    return res.json({message:"This is Node JS from Jibesh's Computer"});
});

app.get("/jibesh",(req,res)=>{
    return res.json({
        name:"Jibesh Roy",
        dept:"Computer Science and Engineering",
        roll:22101104034,
        College:"Jalpaiguri Government Engineering College"
    })
});

app.listen(PORT,()=>{
    console.log(`Server started at localhost : ${PORT}`);
})