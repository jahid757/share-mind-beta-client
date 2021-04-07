import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Post.css'
const Post = ({post}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const likePost = (id) => {
        fetch('http://localhost:5000/like',{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId:id,
                like: post.likes.length + 1

            })
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
        console.log(id);
    }
    return (
        <div className="bg-normal p-2 rounded mb-4">
            <div className="post-author mb-3 d-flex ">
                <div className="authorImg">
                    <img className="admin" src={post.photoURL} alt=""/> 
                </div>
                <div className="author_detail">
                    <span className="fw-bold fs-5 text-white name"> {post.name}</span>
                    <p>{new Date(post.date).toDateString('dd/MM/yyyy')}</p>
                </div>
            </div>
            <div className="post-data">
                <h4 className="text-white">{post.title}</h4>
                <img className="my-2" src={post.imgUrl || 'https://i.ibb.co/Pzqm9fQ/We-are-really-sorry.png'} alt=""/>
                <p className="text-white">{post.description}</p>
            </div>
            <div className="post_reaction d-flex justify-content-between text-white">
                {/* <p onClick={() => likePost(post._id)}>Like <span>{ post.likes.length}</span></p>
                <p>Share</p> */}
            </div>
        </div>
    );
};

export default Post;
