import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import useCloths from '../../Hooks/useCloths';
import Loader from '../Loader/Loader';

const ManageItems = () => {
    let [cloths, setCloths] = useCloths();
    let [loadin, setLoading] = useState(true);
    useEffect(() => {
        if (cloths.length > 0) {
            setLoading(false)
        }
    }, [cloths])
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
                            cloths.map(cloth => {
                                return (
                                    <tr
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
                                            <button type="button" className="inline-block px-2.5  sm:px-6 py-1.5 sm:py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                                        </td>
                                    </tr>
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