const pi=Math.PI;
let r=5;
let a=pi*r*r;
let call=function(){ return "Calling user" }



/* multiple export as object */
//exports.area=a;
//exports.func=call;


/* single export */
//module.exports=a;


// ES6 Module
export { call as call};