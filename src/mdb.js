const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'node';

const insertDocuments = function(dbName, callback) {
     // Get the documents collection
 const collection = dbName.collection('suzuki');

     // Insert some documents
/*  collection.insertMany([
     {x  : 1,  y:4 }
 ], (err, result)=>{
     assert.equal(err, null);
     assert.equal(1, result.result.n);
     assert.equal(1, result.ops.length);
     console.log("Inserted 1 documents in collection");
     callback(result);
});*/

} 

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('suzuki');

  // the following code examples can be pasted here...

  /* insertDocuments(db, ()=> {
     client.close();
   }); */

     const findResult = await collection.find({type:"hatchback"}).toArray();
     console.log('Found documents =>', findResult);
   
 
  return 'done.';
}

main().then( console.log ).catch(console.error).finally(() => { client.close()  } );