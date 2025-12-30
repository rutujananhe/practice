const express = require('express');

const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());

app.get('/check/:number',(req,res)=>{
    const num=parseInt(req.params.number);
    if (num%2===0) {
        res.json({message:"ok"})
    }
    else{
        res.json({message:"not allowed"})
    }
})

app.listen(3000,()=>{
    console.log("server is running");
});