import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const MyItems = () => {
    const [myCloths, setMyCloths] = useState([])
    const [user] = useAuthState(auth)
    let [loadin, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {

        try {
            axiosPrivate.get(`http://localhost:5000/cloth?email=${user.email}`)
                .then(data => {
                    setMyCloths(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error.response.status);
                    if (error.response.status === 403 || error.response.status === 401) {
                        signOut(auth)
                            .then(() => {
                                navigate('/login')
                                toast.error("Alart!! unauthorize access, You are Loged Out!");
                            })
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }, [user.email])
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
                axios.delete(`http://localhost:5000/cloth/${id}`)
                    .then(data => {
                        if (data.data.success) {
                            let restCloth = myCloths.filter(cloth => cloth._id !== id)
                            setMyCloths(restCloth)
                            toast.success(data.data.message)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }

    // console.log(cloths);
    if (loadin) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className="relative w-10/12  mx-auto my-5 overflow-x-auto shadow-md sm:rounded-lg">

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
                            myCloths.length > 0 ?
                                myCloths.map(cloth => {
                                    return (
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
                                    );
                                })
                                :
                                <p className='py-3'>Data Not Available</p>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;