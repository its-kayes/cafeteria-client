import React, { useEffect, useState } from 'react';
import { SharedBanner } from '../../shared/SharedBanner';

const Menu = () => {

    // const [products, setProducts] = useState([])
    // const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('http://localhost:3000/api/product')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data.products)
    //             setLoading(false)
    //         })
    // }, [])

    // if (isLoading) return <p className='text-center'>Products Loading...</p>
    // if (!products) return <p>No profile data</p>

    return (
        <>
            <SharedBanner header={"Choose you items"} title={"OUR MENU"} name={"Menu Tab"} />

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

                <div className="main__products grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-10">
                    {/* {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                        />)
                    } */}
                </div>
            </div>

        </>
    );
};

export default Menu;
