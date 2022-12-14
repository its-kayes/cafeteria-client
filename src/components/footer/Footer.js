import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-20'>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Clothing Warehouse </span> */}
                    <Link to='/'><p> <span className='cursor-pointer text-2xl font-bold text-orange-400 items-center header1'>Cafeteria </span> </p></Link>
                    <ul className="flex footer-responsive flex-wrap items-center mb-6 text-xl text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.linkedin.com/in/emrul-kayes-b61895237/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/its-kayes" className="mr-4 hover:underline md:mr-6"><i className="fa-brands fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/kayes0000000/" className="mr-4 hover:underline md:mr-6 "><i className="fa-brands fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/___kayes__/" className="hover:underline"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <span className="block font-bold text-sm text-red-500 sm:text-center my-3">New features are being deployed, stay connected with us :/</span>
                <span className="block text-sm text-gray-500 sm:text-center"> This Website Is Design And Deploy by <span className='font-semibold'> <a href="https://www.linkedin.com/in/emrul-kayes-b61895237"> Emrul Kayes </a> </span> For Educational Purpose
                </span>

                <span className="block text-sm text-gray-500 sm:text-center ">?? Copyright 2022</span>
            </footer>

        </div>
    );
};

export default Footer;