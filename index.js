// creating http server using express
// const express =  require("express");
// const app=express();
// function sum(n){
// let ans=0;
// for(let i=1;i<=n;i++){
//     ans=ans+i;
// }
// return ans;
// }
// app.get("/", function(req,res){
//     const n=req.query.n;
//     const ans=sum(n);
//     res.send("hi there");
// })
// app.listen(3000);


const express=require("express");
const app=express();
//array of an object;
const users=[{
       name:"John",
    kidneys:[{
             healthy: false
       }]
}];
app.use(express.json());
app.get("/",function(req,res){
const johnKidneys=users[0].kidneys;
const noOfKidneys=johnKidneys.length;
let noOfHealthyKidneys=0;
for(let i=0;i<johnKidneys.length;i++){
    if(johnKidneys[i].healthy){
        noOfHealthyKidneys+=1;
    }
}
const  noOfUnhealthyKidneys=noOfKidneys-noOfHealthyKidneys
res.json({
noOfKidneys,
noOfHealthyKidneys,
noOfUnhealthyKidneys,
})
})
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done"
    })
})
app.put("/",function(req,res){
for(let i=0;i<users[0].kidneys.length;i++)
{
users[0].kidneys[i].healthy=true;
}
res.json({});
}) 
app.delete("/",function(req,res){
      const newKidneys=[];
      for(let i=0;i<users[0].kidneys.length;i++){
      if(users[0].kidneys[i].healthy){
       newKidneys.push({
        healthy:true
       })
      } 
      }
      users[0].kidneys=newKidneys;
      res.json({msg:"all set"})
})
app.listen(3000);
