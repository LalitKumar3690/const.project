import React from 'react'
import Navdata from './Navdata'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logotext.png'
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { useState , useEffect} from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import Hero from './Hero';
import { RiCloseLargeLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";


const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menu, setMenu] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const [isHovered, setIsHovered] = useState(null)
  const [optionsVisible, setoptionVisible] = useState(false)
  return (
    <header
    >
      <nav className={`w-full top-0 left-0 z-50 fixed  flex items-center justify-center ${scrolling? 'bg-gradient-to-l to-white via-white from-sky-900 2xl:h-[6rem] xl:h-[5rem] lg:h-[4rem] transition-colors duration-300 ease-in-out' : 'bg-gradient-to-l to-white via-white/ from-[#3472b03b] 2xl:h-[8rem] xl:h-[7rem] lg:h-[5.5rem]'}`}>
          <div className={`w-[95%] flex justify-between rounded-md ${scrolling ? '2xl:h-[4em] xl:h-[3.5em] lg:h-[3em]' : '2xl:h-[4.8em] xl:h-[4.3em] lg:h-[3.3em]'}`}>
              <div className={`h-full  w-[75%] lg:w-[72%] flex justify-center rounded-md items-center`}>
                <div className={`flex items-center justify-between bg-white w-[95%] shadow-xl rounded-l-md `}>
                  <div className={`flex 2xl:w-60 xl:w-60 lg:w-48 h-full items-center  pt-1`}>
                      <img src={Logo} className={`${scrolling?'2xl:w-[4em] xl:w-[3.5em] lg:w-[3em] 2xl:h-[3.8em] xl:h-[3.3em] lg:h-[2.8em]':'2xl:w-[4.5em] xl:w-[4em] lg:w-[3.5em] 2xl:h-[4.8em] xl:h-[4.3em] lg:h-[3.3em]'}`}></img>
                      <img src={Logo2} className={`${scrolling?'2xl:h-9 xl:h-7 lg:h-5':'2xl:h-11 xl:h-8 lg:h-6'}`}></img>
                  </div>
                  <div className='flex 2xl:h-12 xl:h-11 lg:h-7 mr-[7%]  lg:mr-[1%] text-gray-600 font-semibold 2xl:gap-8 xl:gap-5 lg:gap-4'>
                      {
                        Navdata.map((value, index) => (
                          <div >
                            <div className='group h-full flex flex-col justify-center' key={value.id}>
                              <button className={`2xl:text-lg lg:text-xs xl:text-base flex items-center font-serif 2xl:font-bold  ${value.subbuthai ? "2xl:pt-0" : "2xl:pt-0"}`} 
                              onMouseEnter={()=>setIsHovered(index)}
                              onMouseLeave={()=>setIsHovered(null)}
                              >{value.buttoname}
                                {
                                  value.subbuthai ? <span className='2xl:text-2xl xl:text-xl lg:text-lg font-bold'>
                                    {
                                      isHovered === index ? <MdArrowDropUp className=''/> : <MdArrowDropDown className=''/> 
                                    }
                                  </span>
                                  : ""
                                }
                                </button>   
                              <div className='w-0 h-[2px] bg-black/70 rounded-xl group-hover:w-full duration-700'></div>
                              <div className='absolute 2xl:top-16 group-hover:block hidden z-50'
                              onMouseEnter={()=>setoptionVisible(true)}
                              onMouseLeave={()=>setoptionVisible(false)}>
                                {value.subbuthai && <div className={`w-48 absolute transition-translate duration-500 ease-in-out transform overflow-y-hidden border-2 border-white rounded-lg backdrop-blur-lg ${
                                          isHovered === index || optionsVisible ? 'h-max translate-y-0 opacity-100' : ' h-0 opacity-0'
                                      } `}>
                                  {value.subbut.map(sub=>(
                                    <h2 key={sub.id} className='my-3 mx-3 border-b-[0.5px] pb-1 duration-100 ease-in-out border-white/50 text-white cursor-pointer hover:scale-105'>{sub.subbutname}</h2>
                                  ))}
                                  </div>}
                              </div>
                            </div>
                                
                          </div>

                                
                        ))
                      }
                  </div>
                  </div>
                  <span class={`w-0 h-0 relative ${scrolling?'2xl:border-b-[4em] xl:border-b-[3.5em] lg:border-b-[3em] 2xl:border-r-[6em] xl:border-r-[5em] lg:border-r-[4em]':'2xl:border-b-[5em] xl:border-b-[4.5em] lg:border-b-[3.5em] 2xl:border-r-[7em] xl:border-r-[6em] lg:border-r-[5em]'} border-b-white border-r-transparent`}></span>
                    
              </div>
              <div className={`flex ${scrolling?'2xl:py-[4px] xl:py-[3px] lg:py-[3px]' : '2xl:py-[6px] xl:py-[6px] lg:py-[4px]'} gap-4 bg-transparent`}>
                  <button className={`${scrolling?'2xl:text-3xl xl:text-2xl lg:text-xl':'2xl:text-4xl xl:text-3xl lg:text-2xl'} text-white`}><LuPhoneCall/></button>
                  <button className={`${scrolling?'2xl:text-4xl xl:text-3xl lg:text-2xl':'2xl:text-5xl xl:text-4xl lg:text-3xl'} text-white`}><IoMailOutline/></button>
                  <button className='bg-transparent 2xl:px-7 xl:px-5 lg:px-4 rounded-md 2xl:text-lg xl:text-base lg:text-sm text-white font-semibold border-solid border-[2px] border-white hover:white hover:scale-105 transition-transform ease-in-out duration-500'>Schedule Consulting</button>
              </div>
          </div>
          {/* mobile menu */}
          
      </nav>
      <Hero/>
    </header>
  )
}

export default Header
