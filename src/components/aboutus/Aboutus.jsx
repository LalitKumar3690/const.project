import Aboutdata  from './Aboutdata';
import Bg1 from '../../assets/bg1.png'
import Bg2 from '../../assets/bg2.png'
import React, {useState, useEffect} from 'react'

const Aboutus = () => {
  const buttons = [
    {id:1, name:"button 1", link:"img1"},
    {id:2, name:"button 2", link:"img2"},
    {id:3, name:"button 3", link:"img3"},
    {id:4, name:"button 4", link:"img4"},
    {id:5, name:"button 5", link:"img5"},
    {id:6, name:"button 6", link:"img6"},
  ]

  const scrollHandler =(but)=>{
    Aboutdata.map((a)=>{

      const element = document.getElementById(a.link);
      if(but === a.link){
        element.scrollIntoView({behavior:"smooth", block:"center"})
      }
    })
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 300; // Change this value based on when you want the animation to trigger

    if (scrollPosition > threshold) {
      setIsVisible(true);
    } 
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='w-full h-96 relative mt-4'>
        <div className='w-[80%] mx-auto border-2 border-gray-800 rounded-xl p-8 h-full '>
          <img src={Bg1} className='w-full h-full '></img>
        </div>
        <div className='absolute bottom-10 w-full flex justify-center items-center gap-12 flex-wrap'>
          {
            buttons.map(v=>(
              <buttons key={v.id} className='bg-sky-700 px-6 py-2 rounded-md text-gray-100 cursor-pointer' 
              onClick ={()=>{scrollHandler(v.link)}}
              >{v.name}</buttons>
            ))
          }
        </div>
        
      </div> 
      <div className='bg-slate-50 flex flex-col gap-12 my-4'>
      {/* <div className=' z-10 h-full w-full top-0 left-0 bottom-0 fixed'>
        <img src={Bg1} alt="bg1" />
        <img  src={Bg2} alt="bg2" />
      </div> */}
        {
          Aboutdata.map((value)=>(
            value.position ? 
            <div key={value.id} id={value.link} className={`bg-slate-200 py-12 z-50 relative duration-500 `}>
              <div className='flex gap-8 justify-center px-8 '>
                <div className={`w-[40%] h-full rounded-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0': 'opacity-0 -translate-x-[100%]'}`}>
                  <img src={value.src} className='rounded-md'></img>
                </div>
                <div className='w-[40%] flex flex-col justify-center gap-8 '>
                  <h1 className='text-3xl font-sans font-semibold text-gray-800'>{value.title}</h1>
                  <p  className='text-lg font-sans text-gray-600'>{value.description}</p>
                </div>
              </div>
            </div> : 
            <div key={value.id} id={value.link} className=' bg-slate-200 py-12 z-50 relative'>
            <div className='flex gap-8 justify-center px-8'>
              <div className='w-[40%] flex flex-col justify-center gap-8 '>
                <h1 className='text-3xl font-sans font-semibold text-gray-800'>{value.title}</h1>
                <p  className='text-lg font-sans text-gray-600'>{value.description}</p>
              </div>
              <div className='w-[40%] h-full rounded-md'>
                <img src={value.src} className='rounded-md'></img>
              </div>
            </div>
          </div>
          ))
        }
      </div>
      </div>
  )
}

export default Aboutus
