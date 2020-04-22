const Ingredients = require('../../database/helpers/ingredients');
const Recipes = require('../../database/helpers/recipes');

module.exports = {
    Mutation: {
        addIngredientToRecipe: async (_, { name, recipeId }) => {
            try {
                let ingredient = await Ingredients.getByName(name);
                
                if (!ingredient) {
                    ingredient = await Ingredients.add(name);
                } else {
                    const hasIngredient = await Recipes.hasIngredient(recipeId, ingredient.id);
                    
                    if (!hasIngredient) {
                        await Ingredients.addToRecipe(ingredient.id, recipeId);
                    }
                }
    
                return ingredient;   
            } catch (error) {
                throw new Error({
                    errorMessage: 'There was an error',
                    error
                });
            }
        }
    }
}