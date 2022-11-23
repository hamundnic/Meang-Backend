
import { MongoClient } from 'mongodb';





class Database{
    async init (){ 
        
        const MONGO_DB = process.env.DATABASE || 'mongodb://localhost:27017/meang-online-shop';
      let mongoClient; 
        
   try {
    mongoClient = new MongoClient(MONGO_DB,);

    console.log('Connecting to MongoDB localhost...');
   const client=  await mongoClient.connect();

   const db=client.db();
   if(!client.off){
  console.log('Successfully connected to MongoDB localhost');
  
  /*console.log(`STATUS : ${chalk.whiteBright("Online")}`);
  console.log(`STATUS : ${chalk.greenBright(db.databaseName)}`);*/
   }
  

    return mongoClient;
} catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
    process.exit();
}
      
         
    }    
}
export default Database;