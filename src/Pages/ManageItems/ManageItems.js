import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useCloths from '../../Hooks/useCloths';
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const ManageItems = () => {
    let [cloths, setCloths] = useCloths();
    let [loadin, setLoading] = useState(true);
    useEffect(() => {
        if (cloths.length > 0) {
            setLoading(false)
        }
    }, [cloths])
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://floating-coast-61520.herokuapp.com/cloth/${id}`)
                    .then(data => {
                        if (data.data.success) {
                            let restCloth = cloths.filter(cloth => cloth._id !== id)
                            setCloths(restCloth)
                            toast.success(data.data.message)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            };
        });


    };

    if (loadin) {
        return <Loader></Loader>;
    }
    return (
        <div className='mb-10'>
            <div className='text-right py-5 w-10/12  mx-auto'>
                <Link to={"/addItems"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Items
                    <svg className="w-4 h-4 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
            <div className="relative w-10/12  mx-auto mb-5 overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className=" sm:px-6 px-2 py-2 sm:py-3 text-center sm:text-left">
                                Image
                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Name
                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3">
                                Supplier
                            </th>
                            <th scope="col" className=" sm:px-6 py-2 sm:py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cloths.map(cloth => {
                                return (
                                    <Fade>
                                        <tr key={cloth._id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="px-2 sm:px-5 py-3  dark:text-white whitespace-nowrap">
                                                <img className='w-10 sm:w-16' src={cloth?.img} alt="" />
                                            </th>
                                            <td className="px-2 sm:px-5 py-3 text-xs sm:text-sm font-semibold sm:font-bold">
                                                {cloth?.name}
                                            </td>
                                            <td className="px-2 text-xs sm:text-sm  sm:px-5 py-3">
                                                {cloth?.supplierName}
                                            </td>
                                            <td className="px-2 sm:px-5 py-3 text-center">
                                                <button type="button"
                                                    onClick={() => handleDelete(cloth?._id)}
                                                    className="inline-block px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                            </td>
                                        </tr>
                                    </Fade>
                                );
                            })
                        }






                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;