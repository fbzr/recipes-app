import { gql } from 'apollo-boost';

const GET_RECIPES = gql`
    {
        recipes {
            id
            name
            image_url
            ingredients {
                name
            }
            instructions {
                description
            }
        }
    }
`;

export default {
    GET_RECIPES
}