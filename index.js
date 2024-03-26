const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { db } = require("./db");
require('dotenv').config();

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product,
    },
    context: {
        db,
    },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server listening at ${url}`);
});
