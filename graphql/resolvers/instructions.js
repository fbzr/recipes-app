const Instructions = require('../../database/helpers/instructions');

module.exports = {
    Mutation: {
        addInstruction: async (_, { description, recipeId }) => {
            try {
                const instruction = await Instructions.add(description, recipeId);
                console.log(instruction);
                return instruction;
            } catch (error) {
                throw new Error({
                    errorMessage: 'There was an error',
                    error
                });
            }
        }
    }
}