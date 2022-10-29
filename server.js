const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const PORT = 3200;

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const typesResolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer(){
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: typesResolvers
    });

    const server = new ApolloServer({
        schema
    });

    await server.start();
    server.applyMiddleware({
        app, 
        path: '/graphql'
    });

    // Listener
    app.listen(PORT, () => {
        console.log(`Listening on the ${PORT} for the GraphQL Project`);
    });
}

startApolloServer();

