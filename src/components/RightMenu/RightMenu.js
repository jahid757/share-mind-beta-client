import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './RightMenu.css'
const RightMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <ul className="right_menu_ul">
                <li><Link to='/myPost'>My Post</Link></li>
                
            </ul>
    );
};

export default RightMenu;