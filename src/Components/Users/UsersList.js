import React from 'react';
import { Link } from 'react-router-dom';


const UsersList = ({ user }) => {
    const { id, userId, title, body } = user;
 
    return (
        <div class="card w-100 mt-3">
            <div class="card-header">
               All user List 
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <p class="card-text">Id:{id}</p>
                <p class="card-text">UserId:{userId}</p>
                </div>
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{body}</p>
                <Link to={`/user/${id}`}  class="btn btn-dark">see more</Link>
            </div>
        </div>
    );
};

export default UsersList;