import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Zoom } from 'react-reveal';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';

const AddItems = () => {
    const [user, loading] = useAuthState(auth);

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const supplierName = e.target.supplierName.value;
        const imgURL = e.target.imgURL.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const clothingInfo = {
            name: name,
            email: email,
            price: price,
            description: description,
            img: imgURL,
            quantity: quantity,
            supplierName: supplierName,
            sold: `${quantity < 1 ? "sold out" : "sold"}`
        }
        // console.log(clothingInfo);
        axios.post('https://floating-coast-61520.herokuapp.com/cloths', clothingInfo)
            .then(data => {
                if (data.data.success) {
                    toast.success(data.data.message)
                }
            })
        e.target.reset()
    }
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <Zoom>
            <div className='w-10/12 mx-auto my-14 sm:my-28'>
                <form onSubmit={handleSubmit}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className='sm:flex justify-evenly'>
                                <div className="w-full  sm:py-0 py-2 sm:w-5/12">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="focus:ring-indigo-500 px-5 py-1 focus:border-indigo-500 flex-1 block w-full  rounded-md border sm:text-sm border-gray-200"
                                            placeholder="Enter Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full  sm:py-0 pt-2 sm:w-5/12">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={user.email}
                                            readOnly
                                            disabled
                                            className="focus:ring-indigo-500 px-5 py-1 focus:border-indigo-500 flex-1 block w-full  rounded-md border sm:text-sm border-gray-200"
                                            placeholder="Enter Email"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='sm:flex justify-evenly'>
                                <div className="w-full sm:py-0 pb-2 sm:w-5/12">
                                    <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">
                                        Supplier Name
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="supplierName"
                                            id="supplierName"
                                            className="focus:ring-indigo-500 px-5 py-1 focus:border-indigo-500 flex-1 block w-full  rounded-md border sm:text-sm border-gray-200"
                                            placeholder="Enter Supplier Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:py-0 pt-2 sm:w-5/12">
                                    <label htmlFor="imgURL" className="block text-sm font-medium text-gray-700">
                                        Photo URL
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            name="imgURL"
                                            id="imgURL"
                                            className="focus:ring-indigo-500 px-5 py-1 focus:border-indigo-500 flex-1 block w-full  rounded-md border sm:text-sm border-gray-200"
                                            placeholder="Enter Photo URL"
                                            required
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col-reverse sm:flex-row justify-evenly'>
                                <div className='w-full sm:pb-0 py-3 sm:w-5/12'>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block p-2 w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="Enter Description"
                                            defaultValue={''}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:pb-0 pb-3 sm:w-5/12 flex justify-evenly flex-wrap">
                                    <div className="w-5/12">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                className="focus:ring-indigo-500 px-5 py-1 focus:border-indigo-500 flex-1 block w-full  rounded-md border sm:text-sm border-gray-200"
                                                placeholder="Enter Price"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="w-5/12">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                            Stock
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                type="number"
                                                name="quantity"
                                                id="quantity"
                                                className="focus:ring-indigo-500 px-5 py-1 focus:border-indigo-500 flex-1 block w-full  rounded-md border sm:text-sm border-gray-200"
                                                placeholder="Enter Stock"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add item
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Zoom>
    );
};

export default AddItems;