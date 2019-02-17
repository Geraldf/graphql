import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-schema-tools";

/* tslint:disable:no-var-requires */
const mymodules = [
  require("./modules/some-type"),
  require("./modules/person-type"),
  require("./modules/query")
];

const mainDefs = [
  `
    schema {
        query: Query,
        mutation: Mutation
    }
`
];

const resolvers = mymodules.map(m => m.resolver).filter(res => !!res);
const typeDefs = mainDefs.concat(
  mymodules.map(m => m.typeDef).filter(res => !!res)
);

const Schema: GraphQLSchema = makeExecutableSchema({
  resolvers: resolvers,
  typeDefs: typeDefs
});

export { Schema };
