import React from 'react';
import { useQuery } from '@apollo/react-hooks';
// GraphQL 
import queries from '../graphql/queries';

const Home = () => {
    const { GET_RECIPES } = queries;
    const { loading, error, data } = useQuery(GET_RECIPES);

    if(data) {
        console.log(data);
    }

    return (
        <div>
            HOME
        </div>
    );
}

export default Home;
