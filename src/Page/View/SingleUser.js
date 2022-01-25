import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SingleUserList from '../../Components/SingleUser/SingleUserList';


const singleUserFetcher = async (id) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data;
}

const SingleUser = () => {
    const { id } = useParams();  
    const { isLoading, data } = useQuery(['post', id], () => singleUserFetcher(id), {
        refetchOnWindowFocus: false 
    })


    if (isLoading) {
        return <h2>loadding...</h2>
    }


    return (
        <div className="container">
            {
                <SingleUserList user={data} />
            }
        </div>
    );
};

export default SingleUser;