import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItems.css'

const InventoryItems = ({ cloth }) => {
    return (
        <div className="inventory-container relative m-5 text-left bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {
                cloth?.sold == 'sold out' && <span class="absolute top-2 right-2 text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full">{cloth?.sold}</span>
            }

            <img className="rounded-t-lg " src={cloth?.img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cloth?.name.length < 50 ? cloth?.name : `${cloth?.name.slice(0, 50)}...`}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{cloth?.description.length < 130 ? cloth?.description : `${cloth?.description.slice(0, 130)}...`}</p>
                <div>
                    <p>Quantity : {cloth.quantity}</p>
                    <p>Supplier : {cloth.supplierName}</p>
                </div>
                <div className='flex justify-between pt-3 mr-3'>
                    <button
                        type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >Update</button>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${cloth?.price}</h5>
                </div>

                {/* <Link to={'/'} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link> */}
            </div>
        </div>
    );
};

export default InventoryItems;