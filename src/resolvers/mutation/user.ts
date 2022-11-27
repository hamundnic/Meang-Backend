import { IResolvers } from 'graphql-tools';
import { COLLECTIONS } from './../../config/constants';
import bcrypt from 'bcrypt';
const resolversUserMutations:IResolvers={
Mutation:{
async register(_:void,{user},{db}){
//comprobar queel usuario no existe
const userCheck = await db.collection(COLLECTIONS.CLIENT).findOne({email:user.email});
if(userCheck !== null){
    return {
        status:false,
        message:`Usuario con el Email: ${user.email}  ya existe en nuestra base de datos.`,
        user:null
    };
}
    //Comprobar el ultimo usuario registrado para asignar ID
    const lastUser = await db.collection(COLLECTIONS.CLIENT).find().
    limit(1).sort({registerDate: -1}).toArray();
    
    if(lastUser.length ===0){
        user.id =1;
    }else{
        user.id=lastUser[0].id +1;
    }
    // Asignar la fecha en formato ISO en la propiedad registerDate
    user.registerDate= new Date().toISOString();
    //encriptar el password
    user.password = bcrypt.hashSync(user.password,10);
    //Grandar el documento (registro ) en la coleccion
    return await db.collection(COLLECTIONS.CLIENT).insertOne(user).then(
        async ()=>{
            return {
                status:true,
                message:"Usuario exitosamente guardado ",
                user:user
            };
        }
    ).catch((err: Error)=>{
       // console.log(err.message);
          return {
            status:false,
            message:"Error al cargar los usuarios .Comprueba que tienes correctamente los usuarios",
            user:null
        };;
    })


   
  
}
}
}
export default resolversUserMutations;
/**
 * 
 * else{
       //Comprobar el ultimo usuario registrado para asignar ID
    const lastUser = await db.collection(COLLECTIONS.CLIENT).find().
    limit(1).sort({registerDate: -1}).toArray();    
     if(lastUser.length ===0){
        user.id =1;
    }else{
        user.id=lastUser[0].id +1;
    }
   

   
 
    // Asignar la fecha en formato ISO en la propiedad registerDate
    user.registerDate= new Date().toISOString();
    //Grandar el documento (registro ) en la coleccion
    return await db.collection(COLLECTIONS.CLIENT).insertOne(user).then(
        async ()=>{
            return  {
                status:false,
                message: "usuario agregado correctamente ",
                users:user
            };;
        } 
    ).catch((err: Error)=>{
        console.log('error=>>>',err.message);
        return  {
            status:false,
            message: "no se puede agregar al usuario ",
          
        };;;
    })

}
   
  
}
}
 * 
 * const resolversMutations:IResolvers={
    Mutation:{
    async register(_:void,{user},{db}){
    if (COLLECTIONS.CLIENT){
    //Comprobar el ultimo usuario registrado para asignar ID
        const lastUser = await db.collection(COLLECTIONS.CLIENT).find().
        limit(1).sort({registerDate: -1}).toArray();
        console.log(lastUser)
            if (lastUser[0].password !== lastUser[0].verifyPassword ){
                    //asigna id unicos
             user.id=lastUser[0].id=uuidv4(); 
              // Asignar la fecha en formato ISO en la propiedad registerDate
             user.registerDate= new Date().toISOString();
                 //Grandar el documento (registro ) en la coleccion
             return await db.collection(COLLECTIONS.CLIENT).insertOne(user).then(
                async ()=>{
                    return user;
                }
            ).catch((err: Error)=>{
                console.log(err.message);
                return null;
            })
        
            }else{
                return{
                    status:false,
                    message:"password no macht,please try again"
                }
            }
           
    
    }else if(COLLECTIONS.SUPPLY){
        const lastSupply = await db.collection(COLLECTIONS.SUPPLY).find().
        limit(1).sort({registerDate: -1}).toArray();
        if (lastSupply[0].password !== lastSupply[0].verifyPassword && (lastSupply[0].verifyPassword !==null || lastSupply[0].password !==undefined ||
            lastSupply[0].password !==null || lastSupply[0].verifyPassword !==undefined)){
                    //asigna id unicos
        user.id=lastSupply[0].id=uuidv4();  
           // Asignar la fecha en formato ISO en la propiedad registerDate  
        user.registerDate= new Date().toISOString();
        //Grandar el documento (registro ) en la coleccion
        return await db.collection(COLLECTIONS.SUPPLY).insertOne(user).then(
            async ()=>{
                return user;
            }
        ).catch((err: Error)=>{
            console.log(err.message);
            return null;
        })
    
       }else{
           return{
               status:false,
               message:"password no macht,please try again"
           }
       }
       
    }
        
    
    
       
      
    }
    }
    }
    export default resolversMutations;
 */