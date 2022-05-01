import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineAddCircle } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const InventoryDetails = () => {
    const { id } = useParams();
    const [cloth, setCloth] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = e.target.stock.value;
        if (isNaN(quantity)) {
            toast.error("Enter Valid Input")
            return;
        }
        if (parseInt(quantity) < 0) {
            toast.error("Nagative value not Allow")
            return;
        }
        const updateCloth = {
            name: cloth?.name,
            email: "",
            price: cloth?.price,
            description: cloth?.description,
            img: cloth?.img,
            quantity: quantity,
            supplierName: cloth?.supplierName,
            sold: `${quantity < 1 ? "sold out" : "sold"}`
        }
        setCloth(updateCloth)

        e.target.reset()
    }

    const handleDeliver = () => {


        if (parseInt(cloth?.quantity) < 1) {
            toast.error("Nagative value not Allow")
            return;
        }
        let quantity = parseInt(cloth?.quantity) - 1;
        const lessStock = {
            name: cloth?.name,
            email: "",
            price: cloth?.price,
            description: cloth?.description,
            img: cloth?.img,
            quantity: quantity,
            supplierName: cloth?.supplierName,
            sold: `${quantity < 1 ? "sold out" : "sold"}`
        }
        // console.log(lessStock);
        setCloth(lessStock)
    }



    useEffect(() => {
        axios.get(`http://localhost:5000/cloth/${id}`)
            .then(data => {
                setCloth(data.data);
            })
    }, [])

    const { _id, ...rest } = cloth;
    useEffect(() => {
        (async () => {
            const { data } = await axios.put(`http://localhost:5000/cloth/${id}`, rest)
            // console.log(data);
        })()
    }, [id, rest])

    // console.log(rest);
    useEffect(() => {
        if (Object.keys(cloth).length > 0) {
            setLoading(false)
        }
    }, [cloth])
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="flex justify-evenly py-20 container mx-auto">
            <div className="flex flex-col p-5 md:flex-row md:w-8/12  text-left rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={cloth?.img} alt="" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{cloth?.name}</h5>
                    <p className="text-gray-700 text-base mb-4">{cloth?.description}</p>
                    <p>Stock : {cloth?.quantity}</p>
                    <p>Supplier : {cloth?.supplierName}</p>
                    <p>id : {id}</p>
                    <p>Sold : {cloth?.sold}</p>
                    <div className='flex justify-between pr-3'>
                        <h3 className="text-2xl font-semibold">${cloth?.price}</h3>
                        <button
                            onClick={handleDeliver}
                            type="button"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Delivered</button>
                    </div>

                </div>
            </div>
            <div className='md:w-4/12'>

                <form onSubmit={handleSubmit} className="flex items-center w-10/12 mx-auto">
                    <div className="relative w-52">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <MdOutlineAddCircle className="w-5 h-5 text-gray-500 dark:text-gray-400" >
                            </MdOutlineAddCircle>
                        </div>
                        <input
                            type="text"
                            name='stock'
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full focus:ring-blue-500 focus:border-blue-500 block  pl-10 px-2 py-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Add Stock"
                            required />
                    </div>
                    <input
                        type="submit"
                        className="inline-block px-6 py-3 ml-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        value={"Add Stock"}
                    />
                </form>

            </div>
        </div>
    );
};

export default InventoryDetails;