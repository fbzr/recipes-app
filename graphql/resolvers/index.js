const recipesResolvers = require('./recipes');

module.exports = {
    Query: {
        ...recipesResolvers.Query
    },
    Mutation: {
        ...recipesResolvers.Mutation
    }
}