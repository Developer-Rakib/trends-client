import React from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';

const InventoryDetails = () => {
    return (
        <div className="flex justify-evenly py-20 container mx-auto">
            <div className="flex flex-col p-5 md:flex-row md:w-8/12  text-left rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://res.cloudinary.com/moresport/image/upload/c_fill,f_auto,q_auto:good,w_690/v1575961299/uploads/assets/1155595-BLACK-2-KzP.jpg" alt="" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Under Armour Men's Rival Fleece Full Zip Hoodie</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Constructed with a comfortable knit fabric, this short sleeve top is functional for various running workout regimens. The shirt's material is also practical for managing moisture and helping you keep dry during your training. It's also constructed with recycled materials to support a more sustainable design approach.
                    </p>
                    <p>Stock : {'12'}</p>
                    <p>Supplier : {'MILL Germents'}</p>
                    <p>id : {'626c1c02b06af218a6fb1415'}</p>
                    <p>Sold : {'Sold'}</p>
                    <div className='flex justify-between pr-3'>
                        <h3 className="text-2xl font-semibold">$590.20</h3>
                        <button type="button" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>
                    </div>

                </div>
            </div>
            <div className='md:w-4/12'>

                <form class="flex items-center w-10/12 mx-auto">
                    <div class="relative w-52">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <MdOutlineAddCircle class="w-5 h-5 text-gray-500 dark:text-gray-400" >
                            </MdOutlineAddCircle>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 px-2 py-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Stock" required="" />
                    </div>
                    <button type="button" class="inline-block px-6 py-3 ml-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Stock</button>
                </form>

            </div>
        </div>
    );
};

export default InventoryDetails;