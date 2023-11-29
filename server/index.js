import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import express from "express";

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
  }
`;

const todos = [
  { id: "1", text: "Learn GraphQL", completed: false },
  { id: "2", text: "Build Full-Stack App", completed: false },
];

const resolvers = {
  Query: {
    todos: () => todos,
  },
};

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running");
});

// Apollo
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(8080, () => {
    console.log("*** Running App");
  });
};

startServer();
