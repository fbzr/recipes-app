const recipesDb = require('../../database/helpers/recipes');

module.exports = {
    Query: {
        recipes: async () => {
            try {
                const recipes = await recipesDb.getAll();   
                return recipes;
            } catch (error) {
                throw new Error('There was an error accessing the recipes from the database');
            }
        }
    },
    Mutation: {
        addRecipe: async (_, args) => {
            try {
                const recipe = await recipesDb.add(args);
                return recipe;
            } catch (error) {
                throw new Error('There was an error adding the recipe to the database');
            }
        }
    }
}