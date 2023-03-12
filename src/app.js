import { log } from 'console';
import * as os from 'os';
import * as net from 'network-list';


console.log(`Hello Node ${ process.version}`);

//console.log( os.arch() );
//console.log( os.cpus() );                                                  // cpu info
//console.log( `No of threads are ${os.cpus().length}` );               // no of threads
//os.cpus().forEach(i=>log(i));
//console.log( os.cpus()[0].model  );                               // processor info

//console.log(`Total ram ${os.totalmem()/1024/1024 }MB and Free Memory is ${os.freemem()/1024/1024}`);
//console.log( os.networkInterfaces());
//console.log( os.uptime() );
//console.log( os.userInfo() );


//net.scanEach({}, (err, obj) => {console.log(obj);                            });

