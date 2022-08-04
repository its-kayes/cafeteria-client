import React, { useState } from 'react';
// import img from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useFood from '../hook/useFood';
import Rating from "./Rating";
// import { useRouter } from 'next/router'
// import useProducts from '../../hooks/useProducts';

// import Rating from './rating';

const Product = ({ totalFood }) => {

    let foods = useFood([]);
    let totalFoods = foods[0]
    console.log(totalFoods);

    const { title, img, status, price, rating, desc, _id } = totalFood;

    let [clickedId, setClickedId] = useState();

    // const singleDetails = (id) => {
    //     const quantity = 1;
    //     const cartDetail = { id, quantity }

    //     fetch('http://localhost:3000/api/cart', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(cartDetail)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }

    const singleDetails = (id) => {
        // setClickedId(id);
        // id.preventDefault()
        console.log(id);
    }
    // let getData = (event) => {
    //     // event.preventDefault()
    //     console.log("clicked", event);
    // } 
    // console.log(clickedId)

    return (
        <div className="product__item">
            <div className="w-full p-4">
                <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img className='flex items-center' src={img} alt='pro' />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="mt-2 mb-2  font-bold">{title}</h2>
                            {
                                status ? <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Available</span> : <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-red-800 rounded-full font-semibold uppercase tracking-wide text-xs">Not Available</span>
                            }

                        </div>

                        <p className="text-sm">{desc}</p>
                        <div className="ratings flex items-center my-4">
                            <h2>Rating: </h2>
                            <div className='flex items-center ml-5'>
                                <Rating rating={rating} ></Rating>
                            </div>
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                            <div>
                                <span className="font-bold text-xl">{price}</span>&nbsp;<span className="text-sm font-semibold">BDT</span>
                            </div>
                            {/* <div>
                                <button onClick={() => singleDetails(_id)} className="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                            </div> */}
                            {/* <button type="button" onClick={() => singleDetails(setClickedId(_id))}> clickID </button> */}
                            <form >
                                {/* <button name="data" type='button' onclick={getData(_id)}>Click</button> */}
                            </form>
                            {/* <div>
                                <button onClick={() => router.push({
                                    pathname: '/singleproduct/[pid]',
                                    query: { pid: product._id },
                                })} className="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                            </div> */}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Product;