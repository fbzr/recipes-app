const recipesResolvers = require('./recipes');
const ingredientsResolvers = require('./ingredients');
const instructionsResolvers = require('./instructions');

module.exports = {
    Query: {
        ...recipesResolvers.Query
    },
    Mutation: {
        ...recipesResolvers.Mutation,
        ...ingredientsResolvers.Mutation,
        ...instructionsResolvers.Mutation
    }
}