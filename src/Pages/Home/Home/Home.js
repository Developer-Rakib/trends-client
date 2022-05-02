import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCloths from '../../../Hooks/useCloths';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Loader from '../../Loader/Loader';
import Reviews from '../../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    let [cloths, setCloths] = useCloths();
    let [loadin, setLoading] = useState(true);
    useEffect(() => {
        if (cloths.length > 0) {
            setLoading(false)
        }
    }, [cloths])
    if (loadin) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Slider></Slider>
            <div className='flex justify-evenly flex-wrap'>
                {
                    cloths.slice(0, 6).map(cloth => <InventoryItems
                        key={cloth._id}
                        cloth={cloth}
                    ></InventoryItems>)
                }
            </div>
            <div className='text-right py-5 w-10/12  mx-auto'>
                <Link to={"/manageItems"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Manage Inventory
                    <svg className="w-4 h-4 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>

            <Reviews></Reviews>

        </div>
    );
};

export default Home;