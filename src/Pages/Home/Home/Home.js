import React from 'react';
import InventoryItems from '../../InventoryItems/InventoryItems';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <InventoryItems></InventoryItems>
        </div>
    );
};

export default Home;