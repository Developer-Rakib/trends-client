import React from 'react';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import './InventoryItems.css'

const InventoryItems = ({ cloth }) => {
    const navigate = useNavigate();
    const detailsInvetory = (id) => {
        navigate(`/inventoryDetails/${id}`)
        window.scroll(0, 10)
    }
    return (
        <Fade top>
            <div className="inventory-container relative m-5 text-left bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                {
                    cloth?.quantity < 1 && <span className="absolute top-2 right-2 text-md inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full">Sold Out</span>
                }

                <img className="rounded-t-lg" src={cloth?.img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{cloth?.name.length < 50 ? cloth?.name : `${cloth?.name.slice(0, 50)}...`}</h5>

                    <div className='mb-2'>
                        <p> <strong>Stock</strong> : {cloth.quantity}</p>
                        <p> <strong>Supplier</strong> : {cloth.supplierName}</p>
                    </div>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 ">{cloth?.description.length < 130 ? cloth?.description : `${cloth?.description.slice(0, 130)}...`}</p>
                    <div className='flex justify-between pt-3 mr-3'>
                        <button
                            onClick={() => detailsInvetory(cloth._id)}
                            type="button"
                            className="inline-block sm:px-6 px-5 py-1 sm:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Update</button>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${cloth?.price}</h5>
                    </div>
                </div>
            </div>
        </Fade >
    );
};

export default InventoryItems;