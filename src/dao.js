const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node', {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;

const Schema=mongoose.Schema;

const Car=new Schema({
     _id:mongoose.ObjectId,
     name:{type:String,required:true, unique:true, dropUps:true},
     type:{type: String, required: true},
     price:{type: Number, required: true },
     date: { type: Date, default: Date.now() },
},{collection:"suzuki"});

const model=mongoose.model("model",Car);               // model


//let res= model.find({name:"swift"});
let res= model.find({},'name type price').sort({price:1});
//let res= model.find({name:"swift"},'name type price');

res.then(i=>console.log(i)).catch(err=>console.warn(err));



/* const car=new model({
     _id: new mongoose.Types.ObjectId(),
     name:"fronx",
     type:"crossover",
     price:13_00_000,
});

db.on('error', (err)=> { throw err }); 

db.once("open",()=>{
     car.save().then(i=>{console.log("saved")}).catch(i=>{console.warn(i) });
}); */





/* db.on('error',  (err)=>{ throw err }); 
db.once('open', function callback() {
   console.log('connected!');
   db.close();
}); */