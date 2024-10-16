import React from 'react'
import { useState } from 'react';
import Logo from '../assets/logo.jpeg'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

function Navbar() {
    const [isHovered, setIsHovered] = useState(null)
    const Navdata =[
        {
            id:1,
            menuname:"Services",
            submenu:[
                {
                    subname:"First",
                    link:"/"
                },
                {
                    subname:"Second",
                    link:"/"
                },
                {
                    subname:"Third",
                    link:"/"
                },
                {
                    subname:"Fourth",
                    link:"/"
                }
            ]
        },
        {
            id:2,
            menuname:"Projects & Portfolio",
            submenu:[
                {
                    subname:"First",
                    link:"/"
                },
                {
                    subname:"Second",
                    link:"/"
                },
                {
                    subname:"Third",
                    link:"/"
                },
                {
                    subname:"Fourth",
                    link:"/"
                }
            ]
        }
    ]
  return (
    <nav>
        <div className='w-screen h-20 bg-white flex px-6 justify-between items-center'>
            <div className='w-1/5'>
                <img src={Logo}></img>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='flex gap-10'>
                    <button className='text-sm'>Catalog</button>
                    {
                        Navdata.map((value, index)=>(
                            <div>
                                <button key={value.id} className='text-sm flex gap-1'
                                onMouseEnter={()=>setIsHovered(index)}
                                onMouseLeave={()=>setIsHovered(null)}
                                >
                                    {value.menuname}
                                    <span className='text-lg '>
                                        {
                                            isHovered === index ? <GoChevronUp /> : <GoChevronDown />
                                        }
                                    </span>
                                </button>
                                <div className='absolute'>
                                    <ul>
                                        {
                                            value.submenu.map(sub=>(
                                                <li>{sub.subname}</li>                                                
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    <button className='text-sm'>About us</button>
                    <button className='text-sm'>Achievements</button>
                </div>
                <div className='flex py-5 gap-4 '>
                    <button className='text-xl text-gray-600'><LuPhoneCall/></button>
                    <button className='text-2xl text-gray-500'><MdOutlineEmail/></button>
                    <button className='bg-red-400  px-4 rounded-md text-sm text-white '>Schedule Consulting</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar