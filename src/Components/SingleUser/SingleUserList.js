import React from 'react';
import { Link } from 'react-router-dom';
const SingleUserList = ({user}) => {

    const { userId, id, title, body } = user;
    return (
        <div>
            <div class="card w-100 mt-3">
                <div class="card-header">
                    I am the boss
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <p class="card-text">Id:{id}</p>
                        <p class="card-text">UserId:{userId}</p>
                    </div>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{body}</p>
                    <Link to="/" class="btn btn-dark">Back to previous </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUserList;