const mongoose=require('../dao');

const db=mongoose.connection;

const Schema=mongoose.Schema;

const Pin=new Schema({
     _id:mongoose.ObjectId,
     officeName:{type:String,required:true, unique:true, dropUps:true},
     pincode:{type: Number, required: true },
     taluk:{type: String, required: true},
     districtName:{type: String, required: true},
     stateName:{type: String, required: true}
},{collection:"pincode"});

module.exports=mongoose.model("model1",Pin);               // model