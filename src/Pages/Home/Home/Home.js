import React, { useEffect, useState } from 'react';
import useCloths from '../../../Hooks/useCloths';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Loader from '../../Loader/Loader';
import Slider from '../Slider/Slider';

const Home = () => {
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
            <Slider></Slider>
            <div className='flex justify-evenly flex-wrap'>
                {
                    cloths.slice(0, 6).map(cloth => <InventoryItems
                        key={cloth._id}
                        cloth={cloth}
                    ></InventoryItems>)
                }
            </div>
        </div>
    );
};

export default Home;