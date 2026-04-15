const express=require("express");
const app=express();
const port=8080;
const ExpressError=require("./error");

app.listen(port,()=>{
    console.log("port is working");
});

app.use((req,res,next)=>{
    console.log("this is 1st middleware");
    next();
}
)



app.get("/",(req,res)=>{
    res.send("hii i am root");
})

app.use("/rand",(req,res,next)=>{
    console.log("rand page is found");
    next();
});

app.get("/rand",(req,res)=>{
    res.send("hi i am random page");
});



app.use("/api",(req,res,next)=>{
    let{token}=req.query;
    if(token==="give access"){
        res.send("data");
      next();
    }
    throw new ExpressError(402,"ACEES DENIED");
});




app.get("/err",(req,res)=>{
    abcd;
})


app.use("/err",(err,req,res,next)=>{
   let{status=400,message="something went wrong"}=err;
   res.status(status).send(message);
})


app.use("/admin",(req,res)=>{
    throw new ExpressError(403,"something went wrong");
});




// app.use((req,res)=>{
//     res.send("page is not found");
// });