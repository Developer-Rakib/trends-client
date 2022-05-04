import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineAddCircle } from 'react-icons/md';
import { Fade } from 'react-reveal';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const InventoryDetails = () => {
    const { id } = useParams();
    const [cloth, setCloth] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStock = parseInt(e.target.stock.value)
        const quantity = parseInt(cloth?.quantity) + newStock;
        if (isNaN(newStock)) {
            toast.error("Enter Valid Input")
            return;
        }
        if (parseInt(newStock) < 0) {
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
        axios.put(`https://floating-coast-61520.herokuapp.com/cloth/${id}`, updateCloth)
            .then(data => {
                if (data.data.modifiedCount === 1) {
                    toast.success(`${newStock} Items Stocked Successfully`)
                }
                else {
                    toast.error("Somthing is Wrong")
                }
            })
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
        axios.put(`https://floating-coast-61520.herokuapp.com/cloth/${id}`, lessStock)
            .then(data => {
                // console.log(data.data);
                if (data.data.modifiedCount === 1) {
                    toast.success("1 Items Delivered!")
                }
                else {
                    toast.error("Somthing is Wrong")
                }
            })

    }



    useEffect(() => {
        axios.get(`https://floating-coast-61520.herokuapp.com/cloth/${id}`)
            .then(data => {
                setCloth(data.data);
            })
    }, [id])

    useEffect(() => {
        if (Object.keys(cloth).length > 0) {
            setLoading(false)
        }
    }, [cloth])
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <>
            <div className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
                <Fade right>
                    <div className="flex flex-col p-2 sm:p-5 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
                        <img className=" w-52 sm:mx-0 mx-auto sm:w-full  sm:h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={cloth?.img} alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{cloth?.name}</h5>
                            <p className="text-gray-700 text-sm text-justify sm:text-left sm:text-base mb-2 sm:mb-4">{cloth?.description}</p>
                            <p> <strong>Stock</strong> : {cloth?.quantity}</p>
                            <p> <strong>Supplier</strong> : {cloth?.supplierName}</p>
                            <p> <strong>ID</strong> : {id}</p>
                            <p> <strong>Sold</strong> : {cloth?.sold}</p>
                            <div className='flex justify-between items-center mt-3 sm:pr-3'>
                                <h3 className="text-2xl font-semibold">${cloth?.price}</h3>
                                <button
                                    onClick={handleDeliver}
                                    type="button"
                                    className="inline-block px-5 sm:px-7 py-3 bg-blue-600 text-white font-medium text-xs sm:text-sm leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >Delivered</button>
                            </div>

                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className='md:w-4/12 '>

                        <form onSubmit={handleSubmit} className="flex items-center justify-center sm:w-10/12 w-full mx-auto">
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
                </Fade>
            </div>
            <div className='text-right py-5 w-10/12  mx-auto'>
                <Link to={"/manageItems"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 sm:px-5 sm:py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Manage Inventory
                    <svg className="w-4 h-4 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </>
    );
};

export default InventoryDetails;