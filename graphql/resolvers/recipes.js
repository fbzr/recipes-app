const Recipes = require('../../database/helpers/recipes');
const Ingredients = require('../../database/helpers/ingredients');
const Instructions = require('../../database/helpers/instructions');

module.exports = {
    Query: {
        recipes: async () => {
            try {
                const recipes = await Recipes.getAll();
                const result = recipes.map(async recipe => {
                    const ingredients = await Ingredients.getByRecipe(recipe.id);
                    const instructions = await Instructions.getByRecipe(recipe.id);

                    return {
                        ...recipe,
                        ingredients,
                        instructions
                    };
                });
                
                return result;
            } catch (error) {
                throw new Error('There was an error accessing the recipes from the database');
            }
        },

        recipe: async (_, { id }) => {
            try {
                const recipe = await Recipes.getById(id);
                const ingredients = await Ingredients.getByRecipe(recipe.id);
                const instructions = await Instructions.getByRecipe(recipe.id);
                
                return {
                    ...recipe,
                    ingredients,
                    instructions
                }
            } catch(err) {
                throw new Error('There was an error accessing the recipes from the database');
            }
        }
    },
    Mutation: {
        addRecipe: async (_, { name }) => {
            try {
                const recipe = await Recipes.add(name);

                const ingredients = await Recipes.getIngredients(recipe.id);
                const instructions = await Recipes.getInstructions(recipe.id);

                return {
                    ...recipe,
                    ingredients,
                    instructions
                };
            } catch (error) {
                throw new Error('There was an error adding the recipe to the database');
            }
        }
    }
}