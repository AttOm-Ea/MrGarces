import {Link, NavLink } from 'react-router-dom';
import React from 'react';

function Nav({ sideBar, setSideBar}) {
    return (
        <nav className={`h-screen bg-white fixed top-0 left-0 ease-in duration-[500ms] overflow-hidden ${sideBar? 'w-6/12 lg:w-2/12 block' : 'w-0 block' }`}>
            <ul className='h-4/5 w-full cursor-pointer uppercase list-disc  font-coco flex flex-col mt-2'>
                <Link to="https://rexartmx.com/" target="_blank"> 
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500" > 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2 pl-2'>•</span>
                        RexArt.com     
                    </li>
                </Link> 
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/"> 
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500" onClick={()=>setSideBar(!sideBar)}> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2 pl-2'>•</span>
                        Home
                    </li>
                </NavLink>
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/Admin"> 
                    <li className="min-w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500 break-normal overflow-hidden" onClick={()=>setSideBar(!sideBar)}> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2 pl-2'>•</span>
                        Panel
                    </li>
                </NavLink>
            </ul>
            <div className='h-1/5'>
                <img className='w-4/6 m-auto' src="/img/RxLogoBlack.webp" alt=""/>
            </div>
        </nav>
    );
}

export default Nav;