import React from 'react'
import Navdata from './Navdata'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logotext.png'
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='w-full h-[6rem] flex items-center justify-center bg-gradient-to-l to-black via-transparent/10 from-transparent '>
        <div className='w-[95%] h-[3.5em] flex justify-between rounded-md'>
            <div className='h-full w-[70%] flex justify-between rounded-md items-center'>
              <div className='flex items-center justify-between bg-white w-full rounded-l-sm'>
                <div className='flex w-52 h-full items-center  px-1 pt-1'>
                    <img src={Logo} className='w-12 h-14'></img>
                    <img src={Logo2} className='h-9'></img>
                </div>
                <div className='flex h-10 text-sm text-gray-600 font-semibold gap-5'>
                    {
                      Navdata.map((value) => (
                        <div>
                          <div className='group h-full flex flex-col justify-center' key={value.id}>
                            <button className='tracking-wider font-serif ' >{value.buttoname}</button>   
                            <div className='w-0 h-[2px] bg-black/70 rounded-xl group-hover:w-full duration-700'></div>
                          </div>
                          <div>
                              {value.subbuthai && <div>
                                {value.subbut.map(sub=>(
                                  <h2 key={sub.id}>{sub.subbutname}</h2>
                                ))}
                                </div>}
                            </div>
                        </div>
                          
                        
                      ))
                    }
                </div>
                </div>
                <span class="w-0 h-0 border-b-[60px] border-r-[100px] border-b-white border-r-transparent"></span>
                  
            </div>
            <div className='flex py-2 gap-4 bg-transparent'>
                <button className='text-xl text-gray-600'><LuPhoneCall/></button>
                <button className='text-2xl text-gray-500'><MdOutlineEmail/></button>
                <button className='bg-transparent px-4 rounded-md text-sm text-black/70 font-semibold border-solid border-2 border-black/50 hover:border-black hover:scale-105 transition-transform ease-in-out duration-500'>Schedule Consulting</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
