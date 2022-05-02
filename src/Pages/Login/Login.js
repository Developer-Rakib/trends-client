import axios from 'axios';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link as button, Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo3 from '../../img/images__3_-removebg-preview.png'
import Loader from '../Loader/Loader';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";


    const handleLogin = async (e) => {

        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;

        await signInWithEmailAndPassword(email, pass)
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        // console.log(data);


    }

    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/wrong-password":
                    toast.error('Password is Wrong!', { id: "signup" })
                    break;
                case "auth/too-many-requests":
                    toast.error('Too Many Requests!', { id: "signup" })
                    break;
                case "auth/user-not-found":
                    toast.error('User Not Available, Please Sign Up!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "login" })
                    break;
            }
        }
    }, [error])
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success("Login Successfull!", { id: "signin" })
        }
    }, [user])
    if (loading) {
        return <Loader></Loader>;
    }
    return (
        <div style={{ backgroundColor: "rgb(249 250 251", height: "90vh" }} className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full ">
                <div>
                    <img
                        className="mx-auto h-20 w-auto"
                        src={logo3}
                        alt="Workflow"
                    />
                    <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form onSubmit={handleLogin} className="mt-8 space-y-6" >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>



                    <div>
                        <button
                            type="submit"
                            className="flex items-center justify-center text-sm  bg-indigo-500 w-full mx-auto py-1 rounded-full text-white hover:bg-indigo-200 hover:text-black sm:text-base"
                        >

                            Login
                        </button>
                    </div>

                    <div className="text-sm ">
                        <button className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot Password? <span>Click here</span>
                        </button>
                        <br />
                        <Link to={'/signUp'} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Create Account? <span>Sign up</span>
                        </Link>
                    </div>
                </form>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;