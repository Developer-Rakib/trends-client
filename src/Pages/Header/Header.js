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
import Loader from '../Loader/Loader';

const Header = () => {
    let [toggle, setToggle] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    let navigat = useNavigate();

    // console.log(user);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigat('/login')
                toast.success('Logout Succes!')
            })


    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='header-container'>
            <nav
                className='flex  sm:justify-between py-2 px-32  items-center text-white'
            >
                <img className='sm:w-48 w-38' src={logo} alt="" />
                <span onClick={navBtnHndle} className='sm:hidden absolute right-8  top-5'>{toggle ? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul onClick={navBtnHndle} className={`flex flex-col z-10 justify-end  sm:flex-row absolute  sm:relative sm:opacity-100 sm:top-0 top-14  right-0 sm:bg-inherit w-1/2 sm:w-full  py-4 sm:py-0 duration-500 ease-out ${toggle ? "w-1/2 opacity-100" : "w-0 opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/"}>Home</NavLink>
                    {
                        user && <>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/manageItems"}>Manage Items</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/addItems"}>Add Items</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/myItems"}>My Items</NavLink>
                        </>
                    }
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/blogs"}>Blogs</NavLink>

                    {user ?
                        <button onClick={handleLogout} className='text-left w-4/6 sm:w-4 sm:mx-0 mx-auto ' >LogOut</button>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;