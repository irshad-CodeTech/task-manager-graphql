const graphql = require("graphql");
// define variable type
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

// define user type object to corresspondance field
const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

module.exports = UserType;
