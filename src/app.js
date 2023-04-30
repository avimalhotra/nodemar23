require("dotenv").config();
const express=require("express");
const app=express();
const path=require("path");
const admin=require("./admin");
const author=require("./author");
const bodyParser=require("body-parser");
const parseurl=require('parseurl');
const cookieParser=require("cookie-parser");
const session=require("express-session");
const nunjucks=require("nunjucks");
const mongoose=require('./dao');
const cars=require('./models/cars');

// configure
nunjucks.configure(path.resolve(__dirname,'public/views'),{
     express:app,
     autoscape:true,
     noCache:false,
     watch:true
 });



//app.set('view engine', 'ejs');
///app.set('views', path.join(__dirname, 'public/views'));

app.set('trust proxy', 1); 
app.use(session({
     secret:"session",
     resave:false,
     saveUninitialized:true,
     cookie:{secure:false, maxAge:5000}
 }))

app.use(cookieParser());
app.use(bodyParser.text());
app.use(bodyParser.json());
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(express.static(path.resolve("src/public")));
/* bootstrap path */
app.use(express.static('node_modules/bootstrap/dist'));


/* app.use((req,res,next)=>{
     console.log(`Login at ${ new Date(Date.now()).toLocaleString() }`);
     next();
}); */
/* app.use( (req, res, next)=>{
     if (!req.session.views) {
       req.session.views = {}
     }
     // get the url pathname
     var pathname = parseurl(req).pathname
   
     // count the views
     req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
   
     next()
   }) */

app.get('/',(req,res)=>{
     res.setHeader('Content-Type','text/html');  
     
     let data=cars.find({}).sort({name:1}).then(i=>{
          res.render('index.html',{name:"Avinash",id:212,city:{name:"noida",pin:201301},month:["jan","feb"],data:i});
     });

});

app.get('/storedata',(req,res)=>{
     let name=req.query.name, type=req.query.type,price=req.query.price;
     const car=new cars({
          _id: new mongoose.Types.ObjectId(),
          name:name,
          type:type,
          price:price
     });
     

     car.save().then(i=>{
          res.status(200).send("data saved")
     })

})


app.get('/about',(req,res)=>{
     res.render('about.html',{name:"Avi",id:200,month:["jan","feb"],user:{name:"aa",id:22}})
})

//const data=[{name:"aa",id:12},{name:"bb",id:13}];

app.get("/api",(req,res)=>{
     res.header('Access-Control-Allow-Origin',"*");
     return res.status(200).send(data);
});

app.post("/searchapi",(req,res)=>{
     let x=req.body;
     res.status(200).send(data);
});


app.get('/cookie',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     //res.status(200).send("<h1>Home Page</h1>");
     //res.cookie("user","avinash", {maxAge:86400000, httpOnly:true});                    // MaxAge in ms
     //res.cookie("city","noida");
     if( Object.keys(req.cookies).length==0 ){
          res.status(200).send("New User");
     }
     else{
          res.status(200).send(req.cookies);
     }
});

app.get('/search',(req,res)=>{
     res.setHeader('Content-Type','text/html');
     //res.status(200).send(req.query);
     
     res.status(200).json({"data":req.query});
     
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
     
     if( req.body.name=="admin" && req.body.pass=="123456" ){
          res.status(200).send(req.body);
     }
     else{
          res.status(404).send("Incorrect inputs");
     }
});

/* Router */
//app.use('/admin',admin);
//app.use("/author",author);

/* function checkAuth(req,res,next){
     console.log(`Admin Login at ${new Date(Date.now()).toLocaleString()}`);
     next();
};
app.use('/admin',checkAuth,(req,res)=>{
     res.setHeader('Content-Type','text/html');
     res.status(200).send("Hello Admin");
}); */


/* wildcard handler */
app.get('/**',(req,res)=>{
     res.status(404).send("404 , Page not Found");
     //res.status(404).redirect("/error.html")
});

app.listen(process.env.PORT,()=>{
     console.log(`App running at http://127.0.0.1:${process.env.PORT}`);
});

