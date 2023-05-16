const graphql = require("graphql");
const axios = require("axios");
const { GraphQLList } = graphql;
const UserType = require("../Typedefs/UserType");
const { response } = require("express");

let users = [
  {
    id: 11,
    name: "irshad",
    email: "irshad@gmail.com",
  },
  { id: 12, name: "abhishek", email: "abhishek@gmail.com" },
  { id: 13, name: "sahil", email: "sahil@gmail.com" },
];

console.log("users", users);
module.exports.UserList = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    const data = users;
    return data;
  },
};
