require("dotenv").config();
const express=require("express");
const app=express();
const path=require("path");

app.use(express.static(path.resolve("src/public")));

/* app.use((req,res,next)=>{
     console.log(`Login at ${ new Date(Date.now()).toLocaleString() }`);
     next();
}); */



app.get('/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     //res.status(200).send("<h1>Home Page</h1>");
     res.status(200).send(req.url);
});

app.get('/search',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     //res.status(200).send(req.query);
     res.status(200).json(req.query);
     //res.status(200).json({"data":req.query});
});
app.get('/product/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send("Product Page"); 
});
app.get('/product/:brand/',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).json(req.params); 
});
app.get('/product/:brand/:name',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).json(req.params); 
});

app.post('/send',(req,res)=>{
     res.status(200).send("Form Submitted");
});


function checkAuth(req,res,next){
     console.log(`Admin Login at ${ new Date(Date.now()).toLocaleString() }`);
     next();
};
app.use('/admin',checkAuth,(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send("Hello Admin")
});


/* wildcard handler */
app.get('/**',(req,res)=>{
     res.status(404).send("404 , Page not Found");
     //res.status(404).redirect("/error.html")
});

app.listen(process.env.PORT,()=>{
     console.log(`App running at http://127.0.0.1:${process.env.PORT}`);
});


