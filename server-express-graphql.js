const path = require('path');
const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const PORT = 3200;

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const typesResolvers = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: typesResolvers
});

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Routes
app.get('/', (req, res) => {
    res.send('I am sending you a message');
});

// Listener
app.listen(PORT, () => {
    console.log(`Listening on the ${PORT} for the GraphQL Project`);
});