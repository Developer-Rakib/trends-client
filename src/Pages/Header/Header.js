import React, { useState } from 'react';
import './Header.css'
import logo from '../../img/logo.webp'
import { NavLink, useNavigate } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Header = () => {
    let [toggle, setToggle] = useState(false);

    let [user] = useAuthState(auth)
    let navigat = useNavigate();

    // console.log(user);
    // console.log(user?.photoURL);



    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='header-container'>
            <nav
                className='flex justify-start sm:justify-between py-2 px-32  items-center text-white'
            >
                <img className='sm:w-48 w-38' src={logo} alt="" />
                <span onClick={navBtnHndle} className='sm:hidden absolute right-8  top-5'>{toggle ? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul className={`flex flex-col  justify-end  sm:flex-row absolute  sm:relative sm:opacity-100 sm:top-0 top-14  right-0 sm:bg-inherit w-1/2 sm:w-full  py-4 sm:py-0 duration-500 ease-out ${toggle ? "w-1/2 opacity-100" : "w-0 opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/"}>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/manageItems"}>Manage Items</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/addItems"}>Add Items</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/myItems"}>My Items</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/blogs"}>Blogs</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    {/* {user ?
                        <div className="user flex items-center">
                            <img src={user.photoURL ? user.photoURL : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} alt="" />
                            <p>{user?.displayName}</p>
                            <button onClick={handleLogout}>LogOut</button>
                        </div>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/login"}>Login</NavLink>} */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;