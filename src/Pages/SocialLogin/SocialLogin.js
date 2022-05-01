import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {


    return (
        <div>
            <div className='flex justify-center items-center py-2'>
                <div className='w-24 sm:w-32 bg-gray-400' style={{ height: '2px' }}></div>
                <p className='px-2'>or</p>
                <div className='w-24 sm:w-32 bg-gray-400' style={{ height: '2px' }}></div>
            </div>
            <div className='flex justify-center'>
                <button className='flex items-center justify-center text-sm  bg-indigo-100 w-1/2 mx-auto py-1 rounded-full text-black hover:bg-indigo-500 hover:text-white sm:text-base'><FcGoogle></FcGoogle> <span className="mx-1">Login with</span> </button>
            </div>

        </div>
    );
};

export default SocialLogin;