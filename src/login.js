import {emitter} from './app';


emitter.on("login",()=>{
     console.log(`Login process starts`);
});


export default emitter;
