import { IResolvers } from 'graphql-tools';

const resolversQuery:IResolvers={
Query:{
users(root,args,context,info){
    console.log(root,args,context,info);
    return [

        {
            id: 1,
    name:"Hamlet",
    lasname:"pena",
    email:'',
    password:'',
    registerDate:'',
    birthday:'',
        }
    ]
}
}
}
export default resolversQuery;