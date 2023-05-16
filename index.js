const express = require("express");
const app = express();
const port = 8000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, () => {
  console.log(`App is connected to server ${port}`);
});
