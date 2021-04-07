import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CreatePost from '../CreatePost/CreatePost';
import Menu from '../Menu/Menu';
import Post from '../Post/Post';
import RightMenu from '../RightMenu/RightMenu';


const MyPost = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userPost,setUserPost] = useState([])
    useEffect(() => {
        fetch('https://floating-wildwood-58594.herokuapp.com/userPost?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => {
            setUserPost(data)
        })
    },[loggedInUser.email])
    
    return (
        <div >
            <Menu></Menu>
            <div className="home-content">
            <CreatePost></CreatePost>
            <div className="post">
                {
                    userPost.length === 0 &&
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    userPost.map(post => <Post post={post}></Post>)
                }
            </div>
            <div className="right_menu" id="right_menu">
                <RightMenu></RightMenu>
            </div>
            </div>
        </div>
    );
};

export default MyPost;