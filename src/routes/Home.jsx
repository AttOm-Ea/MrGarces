import React, { useState } from 'react';
import Modal from '../components/Modal';

function Home(props) {
    const [imgZoom, setImgZoom] = useState(false);

    return (
        <>
            <div className='flex flex-col items-center mb-7'>
                <img className='md:hidden' src="../../public/img/Home.webp" alt="Header"/>
                <img className='hidden md:flex' src="../../public/img/GarcesBarberDesk1.webp" alt="Header"/>
                <button className='w-1/6 -mt-14 md:-mt-48 md:mb-28  text-sky-800 text-lg md:text-3xl hover:text-xl md:hover:text-4xl transition-all duration-500' onClick={()=>{setImgZoom(!imgZoom)}}> Aqui </button>
            </div>
            <img className='md:hidden' src="../../public/img/Products.webp"  alt=""/>
            <img className='md:hidden' src="../../public/img/Services.webp" alt=""/>
            <img className='hidden md:flex' src="../../public/img/GarcesBarberDesk2.webp"  alt=""/>
            <img className='md:hidden' src="../../public/img/Footer.webp" alt=""/>
            <img className='hidden md:flex' src="../../public/img/GarcesBarberDesk3.webp"  alt=""/>
            <Modal imgZoom={imgZoom} setImgZoom={setImgZoom}/> 
        </>
    );
}

export default Home;