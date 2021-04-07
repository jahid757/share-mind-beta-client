import React, {useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import './Home.css'
import Post from '../Post/Post';
import RightMenu from '../RightMenu/RightMenu';
import CreatePost from '../CreatePost/CreatePost';

const Home = () => {
    const [postData,setPostData] = useState([])

    useEffect(() => {
        fetch('https://floating-wildwood-58594.herokuapp.com/post')
        .then(response => response.json())
        .then(data => {
            setPostData(data)
        })
    },[])

    return (
        <div>
            <Menu></Menu>
            <div className="home-content">
                <CreatePost></CreatePost>
                <div className="post">
                    {
                        postData.length === 0 && 
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        postData.map(post => <Post key={post._id} post={post}></Post>)
                    }
                </div>
            </div>
            <div className="right_menu" id="right_menu">
                <RightMenu></RightMenu>
            </div>
        </div>
    );
};

export default Home;