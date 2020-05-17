import React from 'react';
import { useQuery } from '@apollo/react-hooks';
// GraphQL 
import queries from '../graphql/queries';
// Ant Design Components
import { Button } from 'antd';

const Home = () => {
    const { GET_RECIPES } = queries;
    const { loading, error, data } = useQuery(GET_RECIPES);

    if(data) {
        console.log(data);
    }

    return (
        <div>
            HOME
            <Button type="primary">Button</Button>
        </div>
    );
}

export default Home;
