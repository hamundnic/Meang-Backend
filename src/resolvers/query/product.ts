import { IResolvers } from 'graphql-tools';

const resolversProductQuery:IResolvers={
Query:{

products(){
  return true;
}
}//cierra el query resolver
}
export default resolversProductQuery;