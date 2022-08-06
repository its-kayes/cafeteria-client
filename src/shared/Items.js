import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useFood from '../hook/useFood';
import Rating from './Rating';

const Items = () => {
    let navigate = useNavigate();

    let items = useFood([]);
    let foods = items[0]
    console.log(foods);

    let singleDetails = (id) => {
        console.log(id);
        navigate(`/foods/${id}`);

    }

    return (
        <div >
            <div className='text-black grid grid-cols-4'>
                {
                    foods?.map(food => <div className="w-full p-4">
                        <p className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img className='flex items-center' src={food.img} alt='pro' />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="mt-2 mb-2  font-bold">{food.title}</h2>
                                    {
                                        food.status ? <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Available</span> : <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-red-800 rounded-full font-semibold uppercase tracking-wide text-xs">Not Available</span>
                                    }

                                </div>

                                <p className="text-sm">{food.desc}</p>
                                <div className="ratings flex items-center my-4">
                                    <h2>Rating: </h2>
                                    <div className='flex items-center ml-5'>
                                        <Rating rating={food.rating} ></Rating>
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                    <div>
                                        <span className="font-bold text-xl">{food.price}</span>&nbsp;<span className="text-sm font-semibold">BDT</span>
                                    </div>
                                    <div>
                                        <button onClick={() => singleDetails(food.foodId)} className="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Items;