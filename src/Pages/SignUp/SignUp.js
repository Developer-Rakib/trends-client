import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../../img/images__3_-removebg-preview.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { Bounce } from 'react-reveal';

const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // handle sign up 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const confirmPass = e.target.confirmPassword.value;

        if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
            toast.error("Email is not valid")
            return;
        }

        if (pass.length < 6) {
            toast.error("Password is to Sort")
            return;
        }
        if (pass !== confirmPass) {
            toast.error("Password is not Match")
            return;
        }
        await createUserWithEmailAndPassword(email, pass)
        const { data } = await axios.post('https://floating-coast-61520.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data.accessToken)

    }
    const handleEmail = (e) => {
        if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e.target.value)) {
            toast.error("Email is not valid")
        }
    }
    const handlePass = (e) => {
        if (e.target.value.length < 6) {
            toast.error("Password is to Sort")
        }
    }

    // handle error 
    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/email-already-in-use":
                    toast.error('Email Aleady Exist!', { id: "signup" })
                    break;
                case "invalid-email":
                    toast.error('invalid-email!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "signup" })
                    break;
            }
        }
    }, [error])

    useEffect(() => {
        if (user) {
            toast.success('SignUp Successfully!', { id: "signup" })
            navigate('/')
        }
    }, [user])

    if (loading) {
        return <Loader></Loader>;
    }
    return (
        <div style={{ backgroundColor: "rgb(249 250 251", height: "90vh" }} className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Bounce top>
                <div className="max-w-md w-full ">
                    <div>
                        <img
                            className="mx-auto h-20 w-auto"
                            src={logo2}
                            alt="Workflow"
                        />
                        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" >
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
                                    onBlur={handleEmail}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    onBlur={handlePass}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="sr-only">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="off"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="flex items-center justify-center text-sm  bg-indigo-500 w-full mx-auto py-1 rounded-full text-white hover:bg-indigo-200 hover:text-black sm:text-base"
                            >

                                Sign in
                            </button>
                        </div>
                        <div className="text-sm">
                            <Link to={'/login'} className="font-medium text-indigo-600 hover:text-indigo-500">
                                Aleady have an Account? <span>Login</span>
                            </Link>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </Bounce>
        </div>
    );
};

export default SignUp;