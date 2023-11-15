
import {Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Admin from './routes/Admin'
import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div className='h-10 fixed top-3 md:top-12 right-4 md:right-10 cursor-pointer' onClick={()=>setSideBar(!sideBar)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="55px" width="55px" viewBox="0 0 24 24" fill="#B8B8B8"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>
      </div>
      <div className={`h-screen fixed top-0 left-0 ease-in-out duration-0 ${sideBar? 'w-full' : 'w-0'}`} onClick={()=>setSideBar(!sideBar)}> 
        <div className={`w-full h-full ease-in-out duration-500 ${sideBar? 'bg-gray-900/50' : 'bg-inherit'}`} onClick={()=>setSideBar(!sideBar)}> </div>
      </div>
      <Nav sideBar={sideBar}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Admin" element={<Admin/>} />
      </Routes>
    </>
  )
}

export default App



