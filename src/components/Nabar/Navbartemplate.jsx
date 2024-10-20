import React from 'react'
import { useState } from 'react';
import Logo from '../../assets/logo.png'
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
                <div className='flex gap-10 items-center'>
                    <button className=' font-NavMenuFont '>Catalog</button>
                    {
                        Navdata.map((value, index)=>(
                            <div key={value.id}>
                                <div  className=' flex gap-1 group font-NavMenuFont'
                                onMouseEnter={()=>setIsHovered(index)}
                                onMouseLeave={()=>setIsHovered(null)}
                                >
                                    {value.menuname}
                                    <span className='text-lg '>
                                        {
                                            isHovered === index ? <GoChevronUp /> : <GoChevronDown />
                                        }
                                    </span>
                                </div>
                                <div className='relative'>
                                <ul
                                    className={`bg-blue-300 w-28 absolute transition-translate duration-500 ease-in-out transform overflow-y-hidden ${
                                        isHovered === index ? 'h-36 translate-y-0 opacity-100' : 'h-0  opacity-0'
                                    }`}
                                    // Ensures content is clipped when height is 0
                                >
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
                    <button className='font-NavMenuFont'>About us</button>
                    <button className='font-NavMenuFont '>Achievements</button>
                </div>
                <div className='flex py-1 gap-4 '>
                    <button className='text-xl text-gray-600'><LuPhoneCall/></button>
                    <button className='text-2xl text-gray-500'><MdOutlineEmail/></button>
                    <button className='bg-red-400 py-3 px-4 rounded-md text-sm text-white font-semibold hover:bg-red-500'>Schedule Consulting</button>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar