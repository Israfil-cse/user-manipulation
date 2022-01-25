import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import UsersList from '../../Components/Users/UsersList';



const UserDatafetcher = async (repo) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data;


}

const Users = () => {

    const { isLoading, data } = useQuery('posts', () => UserDatafetcher(), {
        keepPreviousData: true,
        refetchOnWindowFocus: false 
    })

    if (isLoading) {
        return <h2>loadding....</h2>
    }

    

    return (
        <div class="container">
        
            {
                
                data.data.map(user => (
                    <UsersList user={user} key={user.id} />
                    
                ))
            }
        </div>
    );
};

export default Users;