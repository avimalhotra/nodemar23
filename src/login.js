import {emitter} from './events';


emitter.on("login",()=>{
     console.log(`Login process starts`);
});


export default emitter;
