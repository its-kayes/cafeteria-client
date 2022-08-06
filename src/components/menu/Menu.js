import React, { useEffect, useState } from 'react';
import useFood from '../../hook/useFood';
import Items from '../../shared/Items';
import Product from '../../shared/Product';
import { SharedBanner } from '../../shared/SharedBanner';

const Menu = () => {
    // let foods = useFood([]);
    // let totalFoods = foods[0]

    // console.log(totalFoods)

    // const [products, setProducts] = useState([])
    // const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     fetch("https://cafeteria-x.herokuapp.com/foods")
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //             setLoading(false)
    //         })
    // }, [])

    // if (isLoading) return <p className='text-center'>Products Loading...</p>
    // if (!products) return <p>No profile data</p>


    // console.log(products);
    // let totalFoods = foods[0]
    // console.log(totalFoods);


    return (
        <>
            <SharedBanner header={"Choose you items"} title={"OUR MENU"} name={"Menu Tab"} />
            {/* 
            <div className='text-black'>
                {
                    totalFoods?.map((food, index) => <p> kayes {index + 1} </p>)
                }
            </div> */}

            <div className="products mt-10 px-10 my-10">
                <div className="products__category mb-10">
                    <div className="grid gap-5 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <img src={`1_005.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider active__category border-none">
                                <img src={`2.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Pizza</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <img src={`3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Burger</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <img src={`4_004.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">French fries</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <img src={`5.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Fast Food</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button className="btn w-full rounded-full tracking-wider border-none">
                                <img src={`6.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Soft drinks</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="main__products grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-10">
                    {
                        totalFoods?.map(totalFood => <Product
                            totalFood={totalFood}
                            key={totalFood?._id}
                        />)
                    }
                </div> */}
                <div>
                    <Items> </Items>
                </div>
            </div>

        </>
    );
};

export default Menu;

