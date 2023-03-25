import { EventEmitter } from 'node:events';

class Event extends EventEmitter {};

let emitter=new Event();

// emitter.on("done",(res,x)=>{
//      console.log(`Event Done 1 with ${res} response and handled is ${x.handled}`);
//      x.handled=true;
// });

// emitter.on("done",(res,x)=>{
//      console.log(`Event Done 2 with ${res} response and handled is ${x.handled}`);
// });


// emitter.emit("done","ok",{handled:false});
// emitter.emit("done","ok",{handled:false});


//console.log(`Hello Node JS ${process.version}`);


/* exp */

//export default emitter=emitter;

export { emitter as emitter };

import * as x from './login.js';
//import * as account from './account';



