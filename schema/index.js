const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = graphql;
const { UserList } = require("./Queries/Users");

const RootQuery = new GraphQLObjectType({
  name: "getby",
  fields: {
    getByColumnName: UserList,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
