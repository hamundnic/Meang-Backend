import { IResolvers } from 'graphql-tools';
import { COLLECTIONS, EXPIRETIME, MESSAGES } from '../config/constants';
import JWT from '../lib/jwt';
import bcrypt from 'bcrypt';

const resolversQuery:IResolvers={
Query:{
async users(_:void,__:void,{db}){
      try {
        // busca en la base de datos y devuelve una lista
        return {
            status:true,
            message: "Lista de usuarios cargadas correctamente",
            users:await db.collection(COLLECTIONS.CLIENT).find().toArray()
        }
      } catch (error) {
        console.log(error);
        return {
            status:false,
            message:"Error al cargar los usuarios .Comprueba quetienes correctamente los usuarios",
            users:[]
        };
      }
},
async login(_:void,{email,password},{db}){
    try {
        // busca en la base de datos y devuelve una lista
            const user= await db.collection(COLLECTIONS.CLIENT).findOne({email});
      
       if(user ===null){
        return {
          status:false,
          message: "Usuario no existe",
          token:null
        }
       }
   
    const passwordCheck= bcrypt.compareSync(password,user.password); 
    console.log(user);
        if(user !==null){
          delete user.password;
          delete user.verifyPassword
          delete user.birthday
          delete user.registerDate
      
        }
        return {
            status:  !passwordCheck ? false:true,
            message: !passwordCheck  ? "Su usuario o contraseña no es valido. Por favor trate de nuevo" :"usuarios cargadas correctamente",
            token: !passwordCheck ? null : new JWT().sign({user},EXPIRETIME.H24)
        }
       
      
        
      } catch (error) {
        console.log(error);
        return {
            status:false,
            message:"Error al cargar los usuarios .Comprueba que tienes correctamente los usuarios",
            token:null
        };
      }  
},
me(_,__,{token}){
  console.log(token);
  let info= new JWT().verify(token);
  if(info === MESSAGES.TOKEN_VERIFICATION_FAILED){
    return{
      status: false,
      message: info,
      user:null
    }
  }
  return {
    status : true,
    message: 'Usuario authenticado correctamente',
    user:Object.values(info)[0]
  };
}
},
}
export default resolversQuery;