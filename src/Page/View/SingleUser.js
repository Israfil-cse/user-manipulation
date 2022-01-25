import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SingleUserList from '../../Components/SingleUser/SingleUserList';
import queryClient from '../../Hooks/queryClient/client';


const singleUserFetcher = async (id) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data;
}

const SingleUser = () => {
    const { id } = useParams();  
    const { isLoading, data } = useQuery(['post', id], () => singleUserFetcher(id), {
        refetchOnWindowFocus: false ,
        // cacheTime: 2
    })


    if (isLoading) {
        return <h2>loadding...</h2>
    }

    const cachePost = queryClient.getQueryData(['post', id])
    console.log(cachePost);


    return (
        <div className="container">
            {
                cachePost? (<h5 class="text-danger">visited</h5>) :''
            }
            {
                <SingleUserList user={data} />
            }
        </div>
    );
};

export default SingleUser;