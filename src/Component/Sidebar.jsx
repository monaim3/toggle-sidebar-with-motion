import React, { useState } from 'react'
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
function Sidebar({open}) {
    console.log('open',open)
    const routes = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />,
        },
        {
            path: "/users",
            name: "Users",
            icon: <FaUser />,
        },
        {
            path: "/messages",
            name: "Messages",
            icon: <MdMessage />,
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <BiAnalyse />,
        },
        {
            path: "/filemanager",
            name: "File Manager",
            icon: <AiTwotoneFileExclamation />,
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                    icon: <FaUser />,
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                    icon: <FaLock />,
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                    icon: <FaMoneyBill />,
                },
            ],
        },
        {
            path: "/order",
            name: "Order",
            icon: <BsCartCheck />,
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <BiCog />,
            exact: true,
            subRoutes: [
                {
                    path: "/settings/profile",
                    name: "Profile ",
                    icon: <FaUser />,
                },
                {
                    path: "/settings/2fa",
                    name: "2FA",
                    icon: <FaLock />,
                },
                {
                    path: "/settings/billing",
                    name: "Billing",
                    icon: <FaMoneyBill />,
                },
            ],
        },
        {
            path: "/saved",
            name: "Saved",
            icon: <AiFillHeart />,
        },
    ];
    const showAnimation = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        show: {
          opacity: 1,
          width: "auto",
          transition: {
            duration: 0.5,
          },
        },
      };
    
    return (
        <div>
            {
                routes.map((route, id) => {
                    return (
                        <NavLink to={route.path}
                            key={id}
                            className="link "
                            activeClassName="active">
                            <div className="icon text-2xl">{route.icon}</div>
                            {
                                open && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="link_text"
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                        </NavLink>
                    )
                })
            }

        </div>
    )
}

export default Sidebar