import compression from "compression";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import enviroments from './config/environments';
import {ApolloServer} from 'apollo-server-express';
import schema from './schema';
import expressPlayground from 'graphql-playground-middleware-express';
import Database from "./lib/database";
import { IContext } from './interfaces/context.interface';
//configuracion de las varable de entorno(lectura)
if(process.env.NODE_ENV !=='production'){
const env= enviroments;
//console.log(env);
}

//funcion inicio
  const init=async()=>{
    const app= express();
app.use('*',cors());


app.use(compression());
//definicion de la base de datos
const database = new Database();
const db = await database.init();

const context = async({req, connection}: IContext) => {
//console.log(req.headers.authorization);
    const token = (req) ? req.headers.authorization : connection['authorization'];
    return { db, token };
};
 const server=  new ApolloServer({
    schema,
    introspection: true,
    context
});
await server.start();
 server.applyMiddleware({app});
/*app.get('/',expressPlayground({
    endpoint:'/graphql'
}))*/
app.get("/",(_:void, res:any)=>{
    res.redirect("/graphql");
})
const httpServer=createServer(app);
const PORT = process.env.PORT || 2002
httpServer.listen({port:PORT},()=>console.log(`http://localhost:${PORT} API MEANG`) )

}
// inicializando funcion
init();


