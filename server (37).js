const express=require("express"),path=require("path");
const app=express();app.use(express.urlencoded({extended:true}));app.use(express.json());app.use(express.static(path.join(__dirname,"public")));
let feedbackList=[];
app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.get("/health",(req,res)=>res.json({status:"OK",message:"Dynamic Node.js application is running."}));
app.post("/feedback",(req,res)=>{
 const name=String(req.body.name||"").trim(),message=String(req.body.message||"").trim();
 if(!name||!message)return res.status(400).json({success:false,message:"Please enter your name and feedback."});
 const feedback={id:feedbackList.length+1,name,message};feedbackList.push(feedback);
 res.json({success:true,message:"Thank you! Your feedback was received.",feedback});
});
app.get("/feedback",(req,res)=>res.json(feedbackList));
const PORT=process.env.PORT||3000;app.listen(PORT,"0.0.0.0",()=>console.log("Dynamic app is running on port "+PORT));
