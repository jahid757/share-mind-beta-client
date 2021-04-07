import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Menu.css'

const Menu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handelPost = () => {
        const post = document.getElementById('post');
        post.classList.toggle('active')
        document.body.classList.toggle('active')
    }

    const handelRightMenu = () => {
        // const rightMenu = document.getElementById('right_menu')
        // rightMenu.classList.toggle('active')
        alert('Work running on this button');
    }

    return (
        <div className="menu-background border-bottom">
            <div className="container">
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link to="/"><img className="logo" src="https://i.ibb.co/8jP9V1V/bg-remove-logo.png" alt=""/></Link>
                    </div> 
                    <div className="profile-info">
                        <img className="admin" src={loggedInUser.photoURL} alt=""/> <span className="fw-bold fs-5 text-white name"> {loggedInUser.name}</span>
                        <button onClick={handelPost} className="btn btn-primary margin-left"><i className="fas fa-plus"></i></button>
                        <button onClick={handelRightMenu} className="btn btn-primary margin-left"><i className="fas fa-bars"></i></button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Menu;