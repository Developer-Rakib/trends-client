import React from 'react';
import useCloths from '../../../Hooks/useCloths';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Slider from '../Slider/Slider';

const Home = () => {
    let [cloths, setCloths] = useCloths();
    // console.log(cloths);
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