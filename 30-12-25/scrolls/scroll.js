const express=require('express');
const bodyParser=require('body-parser');
 
const app=express();

app.use(bodyParser.json());
app.get('/scrolls/:id',(req,res)=>{
    const sId=parseInt(req.params.id)
    if (sId%3===0  && sId%5===0) {
        res.json({message:"The Scroll has been found!"});
    }
    else{
        res.json({message:"No Scroll found!"});
    }
});
app.listen(3000,()=>{
    console.log("server is running");
});