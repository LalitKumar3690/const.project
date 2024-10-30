import React from 'react'
import Navdata from './Navdata'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logotext.png'
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { useState , useEffect} from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
// import Hero from './Hero';
import { RiCloseLargeLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom'


const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const toggleSubButtons = (id) => {
    setActiveButton(activeButton === id ? null : id); // Toggle the active button
  };

    const handleScroll = () => {
        if (window.scrollY > 30) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
      if (menu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
  
      // Clean up on component unmount or when the menu closes
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [menu]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const [isHovered, setIsHovered] = useState(null)
  const [optionsVisible, setoptionVisible] = useState(false)
  return (
    <header className='fixed z-50'>
      <div className={` md:fixed sm:fixed hidden z-20 top-0 bottom-0 left-0 h-full w-full duration-300 ${menu?'backdrop-blur-sm':'backdrop-blur-0'}`} 
      onClick={()=>{
        menu?setMenu(false):setMenu(false)
      }}
      />
      <nav>
      <div className={`hidden w-full top-0 left-0  z-50 fixed md:flex sm:flex items-center justify-center ${scrolling? 'bg-gradient-to-l to-white via-white from-sky-900 2xl:h-[6rem] xl:h-[5rem] lg:h-[4rem] h-[2.5rem] transition-colors duration-300 ease-in-out' : 'bg-gradient-to-l to-white via-white/ from-[#3472b03b] 2xl:h-[8rem] xl:h-[7rem] lg:h-[5.5rem] h-[3.5rem]'}`}>
          <div className={`w-[95%] hidden sm:flex md:flex justify-between rounded-md ${scrolling ? '2xl:h-[4em] xl:h-[3.5em] lg:h-[3em] h-[1.5em]' : '2xl:h-[4.8em] xl:h-[4.3em] lg:h-[3.3em] h-[2em]'}`}>
              <div className={`h-full  w-[75%] lg:w-[72%] flex justify-center rounded-md items-center`}>
                <div className={`flex items-center justify-between bg-white w-[95%] shadow-xl rounded-l-md `}>
                  <Link to='/' onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <div className={`flex 2xl:w-60 xl:w-60 lg:w-48 w-48 h-full items-center  pt-1`}>
                      <img src={Logo} className={`${scrolling?'2xl:w-[4em] xl:w-[3.5em] lg:w-[3em] w-[1.5em] 2xl:h-[3.8em] xl:h-[3.3em] lg:h-[2.8em] h-[1.5em]':'2xl:w-[4.5em] xl:w-[4em] lg:w-[3.5em] w-[2em] 2xl:h-[4.8em] xl:h-[4.3em] lg:h-[3.3em] h-[2em]'}`}></img>
                      <img src={Logo2} className={`${scrolling?'2xl:h-8 xl:h-7 lg:h-5 h-2':'2xl:h-9 xl:h-8 lg:h-6 h-3'}`}></img>
                  </div>
                  </Link>
                  <div className='flex 2xl:h-12 xl:h-11 lg:h-7 h-6 2xl:mr-[7%] xl:mr-[3%] mr-[2%] w-full justify-end lg:mr-[1%] text-gray-600 font-semibold 2xl:gap-8 xl:gap-5 lg:gap-4 gap-4'>
                      {
                        Navdata.map((value, index) => (
                          <div className=''>
                            <div className=' h-full group flex flex-col justify-center' >
                              <Link to='/about' onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}>
                              <div className='' key={value.id}>
                              <button className={`2xl:text-lg lg:text-xs xl:text-base text-[0.5rem] flex items-center font-serif 2xl:font-bold  ${value.subbuthai ? "2xl:pt-0" : "2xl:pt-0"}`} 
                              onMouseEnter={()=>setIsHovered(index)}
                              // onMouseLeave={()=>setIsHovered(null)}
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
                              <div className='w-0 2xl:h-[3px] xl:h-[2px] lg:h-[2px] h-[1px] bg-black/70 rounded-xl group-hover:w-full duration-700'></div>
                              </div>
                              </Link>
                              <div className={`absolute hidden  group-hover:block z-50 ${scrolling ? '2xl:top-[68px] xl:top-[53px] lg:top-[42px] top-[19px]' : '2xl:top-[90px] xl:top-[78px] lg:top-[58px] top-[31px]'}`}
                              onMouseEnter={()=>setoptionVisible(true)}
                              onMouseLeave={()=>{setoptionVisible(false);
                                // setIsHovered(null);
                              }}>
                                {value.subbuthai && <div className={`2xl:w-56 xl:w-52 lg:w-44 w-24 transition-translate duration-500 bg-black/50  2xl:border-2 xl:border-[1.5px] lg:border-[1px] border-[0.5px] border-white rounded-lg backdrop-blur-lg   ${
                                          (isHovered === index || optionsVisible) ? 'h-max translate-y-4 opacity-100  ' : ' h-0 opacity-0 translate-y-0'
                                      } `}>
                                  {value.subbut.map(sub=>(
                                    <h2 key={sub.id} className='2xl:my-5 xl:my-4 lg:my-3 2xl:mx-5 xl:mx-4 lg:mx-3 my-2 mx-2 border-b-[0.5px] pb-1 duration-100 ease-in-out border-white/50 text-white cursor-pointer hover:scale-105 2xl:text-base xl:text-sm lg:text-xs text-[0.35rem]'>{sub.subbutname}</h2>
                                  ))}
                                  </div>}
                              </div>
                            </div>
                                
                          </div>

                                
                        ))
                      }
                  </div>
                  </div>
                  <span class={`w-0 h-0 relative ${scrolling?'2xl:border-b-[4.1em] xl:border-b-[3.5em] lg:border-b-[3.1em] border-b-[1.75em] 2xl:border-r-[6em] xl:border-r-[5em] lg:border-r-[4em] border-r-[2em]':'2xl:border-b-[5.08em] xl:border-b-[4.55em] lg:border-b-[3.55em] border-b-[2.25em] 2xl:border-r-[7em] xl:border-r-[6em] lg:border-r-[5em] border-r-[3em] '} border-b-white border-r-transparent`}></span>
                    
              </div>
              <div className={`flex ${scrolling?'2xl:py-[4px] xl:py-[3px] lg:py-[3px]' : '2xl:py-[6px] xl:py-[6px] lg:py-[4px] py-[4px]'} 2xl:gap-4 xl:gap-4 lg:gap-4 gap-2 bg-transparent`}>
                  <button className={`${scrolling?'2xl:text-3xl xl:text-2xl lg:text-xl text-xs':'2xl:text-4xl xl:text-3xl lg:text-2xl text-sm'} text-white `}><LuPhoneCall/></button>
                  <button className={`${scrolling?'2xl:text-4xl xl:text-3xl lg:text-2xl text-md':'2xl:text-5xl xl:text-4xl lg:text-3xl text-lg'} text-white`}><IoMailOutline/></button>
                  <button className='bg-transparent 2xl:px-7 xl:px-5 lg:px-4 px-2 2xl:rounded-md xl:rounded-md lg:rounded-md rounded-[0.25rem] 2xl:text-lg xl:text-base lg:text-sm text-[0.45rem] text-white font-semibold border-solid 2xl:border-[2px] xl:border-[2px] lg:border-[2px] border-[1px] border-white hover:white hover:scale-105 transition-transform ease-in-out duration-500'>Schedule Consulting</button>
              </div>
          </div>
          </div>
          {/* mobile menu */}
          <div className={`fixed z-50 h-14 ${scrolling ? 'bg-gradient-to-l to-white via-white from-sky-900' : 'bg-gradient-to-l to-white via-white/ from-[#3472b03b]'} w-full flex sm:hidden md:hidden items-center justify-between px-2`}>
            <div className='h-14 '>
              <img src={Logo} className='h-full pt-1'></img>
            </div>
            <div className='h-full flex gap-4 items-center relative'>
              <button className='text-xl text-gray-800'><LuPhoneCall/></button>
              <button className='text-2xl text-gray-800'><IoMailOutline/></button>
              <button className='h-8 w-24 bg-[#3372b1] border-[2px] rounded-md text-white'>Contact us</button>
              <button className='text-gray-200 text-3xl z-50' onClick={()=>setMenu(!menu)}>
                {
                  menu ? <RiCloseLargeLine className='text-gray-700'/> : <FiMenu  className='text-gray-200'/>
                }
              </button>
              <div className={`bg-gray-400 z-10 fixed w-[75%] top-0 bottom-0 h-full duration-300 ${menu ? 'right-0':'right-[-100%]'} overflow-y-auto`}>
              <div className=''>
              <div className='pt-20 pl-14 flex flex-col gap-4 '>
              {
                Navdata.map((value)=>(
                  <div>
                    <div className=''>
                      <button className='flex items-center gap-1 text-lg' key={value.id}  onClick={() => toggleSubButtons(value.id)}>{value.buttoname}
                        {
                          value.subbuthai && <span>
                            {
                            activeButton === value.id ? <MdArrowDropUp/> : <MdArrowDropDown/>
                            }
                          </span>
                        }
                      </button>
                      {
                        value.subbuthai && <div className={ ` ${activeButton === value.id  ? 'flex flex-col items-start pl-7 pt-3 gap-2 text-sm' : 'hidden'} `}>
                          {
                            value.subbut.map((sub)=>(
                              <button  key={sub.id}>{sub.subbutname}</button>
                            ))
                          }
                        </div>
                      }
                    </div>
                  </div>
                ))
              }
              </div>
              <button className='h-8 w-24 bg-[#3372b1] border-[2px] rounded-md text-white mt-4 ml-14'>Contact us</button>
            
              </div>
              <div className='flex gap-12 items-center justify-center'>
              <button className='text-xl text-gray-800'><LuPhoneCall/></button>
              <button className='text-2xl text-gray-800'><IoMailOutline/></button>
              </div>
            </div>
              
            </div>
            
          </div>
      </nav>
           
      {/* <Hero/> */}
    </header>
  )
}

export default Header
