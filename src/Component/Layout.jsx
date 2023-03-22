import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FaBars, FaSearch } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from './Sidebar';
function Layout() {
  const [open, isopen] = useState(false)
  const handleBurger = () => isopen(!open)
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <div className='main-container flex'>
        <motion.div
          className=' bg-slate-600 h-screen'
          animate={{
            width: open ? "300px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
        >
          <div className='flex justify-between items-center p-4 text-white	'>
            {open && <h3 className='text-2xl'>Coding with Fun</h3>}
            <FaBars className='text-2xl' onClick={handleBurger} />
          </div>
          <div className='flex gap-3 items-center p-3 text-white'>
            <FaSearch className='text-2xl' />
            {open && <motion.input className='rounded-md p-1 ' type='text' placeholder='Search here...'
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={inputAnimation} />}
          </div>
          <Sidebar open={open}></Sidebar>
        </motion.div>
        <div className='ml-4'>
          <Outlet></Outlet>
        </div>

      </div>
    </>
  )
}

export default Layout