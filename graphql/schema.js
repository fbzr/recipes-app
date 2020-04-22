const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Ingredient {
        id: ID!
        name: String!
    }

    type Instruction {
        id: ID!
        description: String!
        step: Int!
    }

    type Recipe {
        id: ID!
        name: String!
        image_url: String
        ingredients: [Ingredient]!
        instructions: [Instruction]!
    }

    # queries
    type Query {
        recipes: [Recipe]!
        recipe(id: ID!): Recipe
    }

    # mutations
    type Mutation {
        addRecipe(name: String!): Recipe!
        addIngredientToRecipe(name: String!, recipeId: ID!): Ingredient!
        addInstruction(description: String!, recipeId: ID!): Instruction!
    }
`;

module.exports = typeDefs;