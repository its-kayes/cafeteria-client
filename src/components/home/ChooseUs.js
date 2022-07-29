import React from 'react';
import { Link } from 'react-router-dom';
import "./chooseus.css";

export const ChooseUs = () => {
    return (
        <div className="flex md:grid grid-cols-12 items-center justify-center pt-16">

            <div className="header1 col-span-6 pl-20 ">
                <h2 className='text-2xl pb-6'><span className='header1'>Why choose us</span></h2>
                <h2 className='font-bold text-4xl pb-5'><span className="header2">We Have Excellent Of Quality <br /> Japanese Food</span></h2>
                <p className='text-lg font-sans text-[#8C8B8A]'>A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .</p>
                <div className="p-8">
                    <button className="hover:bg-transparent duration-500 ease-in btn rounded-full border-0 text-black p-1 mt-8"><span className='btn rounded-full border-0 text-black px-12  bg-[#fdc913] hover:bg-[#fdc913]'>Get IT NOW</span></button>
                    {/* <Link to='/'><button className="btn btn-lg btn-warning rounded-full p-4"><span className="btn">Check Our Menu</span></button></Link> */}
                </div>
            </div>
            <div className="item2 col-span-6">
                <img src="https://i.ibb.co/g6xB5zj/1-003.png" alt="image" />
            </div>
        </div>
    )
}