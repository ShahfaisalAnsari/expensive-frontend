import BottomBar from '@/components/Common/BottomBar'
import Navbar from '@/components/Common/Navbar'
import Sidebar from '@/components/Common/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const CombineBars = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <>
  <>
      <Navbar />
    <div className={` transition-all duration-300 ${isOpen ? 'md:ml-[200px]' : 'md:ml-[60px]'}`}>

      <div className='pt-[7vh]'>
      <Outlet />
      
      </div>
      
    </div>
    <div >
      <Sidebar />
    </div>
    </>
    {/* <BottomBar/> */}
    </>
  )
}

export default CombineBars