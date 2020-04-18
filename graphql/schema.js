const { gql } = require('apollo-server');

const typeDefs = gql`
    type Ingredient {
        id: ID!
        name: String!
        brand: String
    }

    type Recipe {
        id: ID!
        name: String!
        ingredients: [Ingredient]!
        instructions: [String]!
    }

    # queries
    type Query {
        recipes: [Recipe]!
    }

    # mutations
    type Mutation {
        addRecipe(name: String!): Recipe!
    }
`;

module.exports = typeDefs;