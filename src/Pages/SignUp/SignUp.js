import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../img/images__3_-removebg-preview.png'


const SignUp = () => {
    return (
        <div style={{ backgroundColor: "rgb(249 250 251", height: '80vh' }} className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full ">
                <div>
                    <img
                        className="mx-auto h-20 w-auto"
                        src={logo2}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                </div>
                <form className="mt-8 space-y-6" >
                    {/* <input type="hidden" name="remember" defaultValue="true" /> */}
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
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="password"
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
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >

                            Sign Up
                        </button>
                    </div>
                    <div className="text-sm">
                        <Link to={'/login'} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Aleady have an Account? <span>Login</span>
                        </Link>
                    </div>
                    {/* <div className="flex items-center justify-between">
                        
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default SignUp;