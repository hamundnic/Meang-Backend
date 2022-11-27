import resolversProductQuery from "./product";
import resolversUserQuery from "./user";

const GMR = require('@wiicamp/graphql-merge-resolvers');
const queryResolver = GMR.merge([
    resolversUserQuery,
    resolversProductQuery
  ]);
  export default queryResolver;