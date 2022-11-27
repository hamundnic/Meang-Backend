import resolversUserMutations from "./user";

const GMR = require('@wiicamp/graphql-merge-resolvers');
const queryResolver = GMR.merge([
    resolversUserMutations
  ]);
  export default queryResolver;