import React from 'react'

export const SharedBanner = () => {
    return (
        <div>
            <div className="flex items-center justify-around lg:justify-between bg-[#CC2829] relative bg-[url('https://themefie.com/html/foodka/assets/img/banner/bg-img-2.png')] bg-no-repeat bg-cover bg-center ">
                <div>
                    <img width={250} src="https://themefie.com/html/foodka/assets/img/banner/shape-1.png" />
                </div>
                <div className='w-full my-16 absolute'>
                    <div className="banner-inner text-center">
                        <h3 className='awesome-title header2 text-2xl lg:text-4xl m-4 text-[#FDC913]'>Contact With Us </h3>
                        <h1 className='uppercase leading-[64px] text-4xl lg:text-7xl m-4 text-white header3'>Check your box </h1>
                        <div className="text-sm  breadcrumbs flex justify-center">
                            <ul>
                                <li className='text-white'>Home </li>
                                <li className='text-[#FDC913]'>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img width={250} src="https://themefie.com/html/foodka/assets/img/banner/shape-2.png" />
                </div>
            </div>
        </div>
    )
}
