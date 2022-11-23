import { IResolvers } from 'graphql-tools';
import { COLLECTIONS } from '../config/constants';

const resolversMutations:IResolvers={
Mutation:{
async register(_:void,{user},{db}){

    //Comprobar el ultimo usuario registrado para asignar ID
    const lastUser = await db.collection(COLLECTIONS.USER).find().
    limit(1).sort({registerDate: -1}).toArray();
    if(lastUser.length ===0){
        user.id =1;
    }else{
        user.id=lastUser[0].id +1;
    }
    // Asignar la fecha en formato ISO en la propiedad registerDate
    user.registerDate= new Date().toISOString();
    //Grandar el documento (registro ) en la coleccion
    return await db.collection(COLLECTIONS.USER).insertOne(user).then(
        async ()=>{
            return user;
        }
    ).catch((err: Error)=>{
        console.log(err.message);
        return null;
    })


   
  
}
}
}
export default resolversMutations;