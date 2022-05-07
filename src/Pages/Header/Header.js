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
                className='flex  justify-start items-start  md:justify-between py-3 md:px-32 px-5 md:items-center text-white'
            >
                <img className='sm:w-48 w-40' src={logo} alt="" />
                <span onClick={navBtnHndle} className='md:hidden absolute right-6  top-[22px]'>{toggle ? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul onClick={navBtnHndle} className={`md:flex md:justify-end z-10  md:flex-row left-0  md:relative md:opacity-100 md:w-full md:top-0 absolute top-14  py-4 md:py-0 duration-500 ${toggle ? "w-10/12 opacity-100" : "w-0 opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/"}>Home</NavLink>
                    {
                        user && <>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/manageItems"}>Manage Inventory</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/addItems"}>Add Items</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/myItems"}>My Items</NavLink>
                        </>
                    }
                    <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/blogs"}>Blogs</NavLink>

                    {user ?
                        <button onClick={handleLogout} className='uppercase my-0.5 text-left w-4/6 md:w-auto md:mx-0 mx-auto md:pb-0.5' >LogOut</button>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'navLink')} to={"/login"}>Login</NavLink>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;