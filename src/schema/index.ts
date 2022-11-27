import 'graphql-import-node';
import typeDefs from './schema.graphql';
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from './../resolvers';
const schema: GraphQLSchema = makeExecutableSchema({
typeDefs,
resolvers,
resolverValidationOptions:{
    requireResolversForResolveType:false
}
});

export default schema;