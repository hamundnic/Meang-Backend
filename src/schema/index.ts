import 'graphql-import-node';
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from './../resolvers';
import {loadFilesSync} from '@graphql-tools/load-files';
import {mergeTypeDefs} from '@graphql-tools/merge';
//lee en el directorio los archivos .graphql
const loadedFiles= loadFilesSync(`${__dirname}/**/*.graphql`);
const typeDefs= mergeTypeDefs(loadedFiles);
//schema
const schema: GraphQLSchema = makeExecutableSchema({
typeDefs,
resolvers,
resolverValidationOptions:{
    requireResolversForResolveType:false
}
});

export default schema;