import React from 'react';
import toast from 'react-hot-toast';
import { Fade } from 'react-reveal';
import fillup from '../../img/IMG_20220504_191746-removebg-preview.png';

const Contact = () => {

    const handleSend = (e) => {
        e.preventDefault()
        toast.success('Send Successful!')
        e.target.reset()
    }
    return (
        <div >
            <h1 className="text-3xl sm:text-4xl inline-block px-4 border-b-4 border-cyan-600 mt-10 mb-8">Contact Us</h1>

            <div className='flex container sm:flex-row flex-col-reverse mx-auto mb-16'>
                <Fade right>
                    <div className='sm:w-5/12 w-11/12 px-5 sm:px-10 sm:mx-10 mx-auto mt-20'>
                        <img className='sm:h-20 h-16 sm:mx-0 mx-auto' src={fillup} alt="" />

                        <form onSubmit={handleSend} className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">

                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        required
                                        className="appearance-none rounded-t-md rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
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
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="sr-only">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Address"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex duration-200 items-center justify-center text-sm  bg-indigo-500 w-full mx-auto py-1 rounded-full text-white hover:bg-indigo-200 hover:text-black sm:text-base"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </Fade>
                <Fade left>
                    <div className='sm:w-6/12 w-11/12 sm:mx-0 mx-auto'>
                        <iframe className='w-11/12 mx-auto' style={{ height: "480px" }} title='New York, NY 10012, US' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991381485!2d-74.25987514580468!3d40.697670063772776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1651668427604!5m2!1sen!2sbd" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;