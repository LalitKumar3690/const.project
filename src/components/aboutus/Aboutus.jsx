import Aboutdata  from './Aboutdata';
import Bg1 from '../../assets/bg1.png'
import Bg2 from '../../assets/bg2.png'
import React from 'react'

const Aboutus = () => {
  const buttons = [
    {id:1, name:"button 1"},
    {id:2, name:"button 2"},
    {id:3, name:"button 3"},
    {id:4, name:"button 4"},
    {id:5, name:"button 5"},
    {id:6, name:"button 6"}
  ]

  

  return (
    <div>
      <div className='w-full h-96 relative'>
        <div className='w-full h-full'>
          <img src={Bg1} className='w-full h-full'></img>
        </div>
        <div className='absolute bottom-10 w-full flex justify-center items-center gap-12 flex-wrap'>
          {
            buttons.map(v=>(
              <buttons key={v.id} className='bg-sky-700 px-6 py-2 rounded-md text-gray-100'  >{v.name}</buttons>
            ))
          }
        </div>
        
      </div>
      <div className='bg-slate-50'>
      {/* <div className=' z-10 h-full w-full top-0 left-0 bottom-0 fixed'>
        <img src={Bg1} alt="bg1" />
        <img  src={Bg2} alt="bg2" />
      </div> */}
        {
          Aboutdata.map((value)=>(
            value.position ? 
            <div key={value.id} id={value.link} className='mt-20 bg-slate-200 py-12 mb-4 z-50 relative'>
              <div className='flex gap-4 px-8'>
                <div className='w-[40%] h-full rounded-md'>
                  <img src={value.src} className='rounded-md'></img>
                </div>
                <div className='w-[60%] flex flex-col justify-center gap-8 '>
                  <h1 className='text-3xl font-sans font-semibold text-gray-800'>{value.title}</h1>
                  <p  className='text-lg font-sans text-gray-600'>{value.description}</p>
                </div>
              </div>
            </div> : 
            <div key={value.id} className='mt-20 mb-4 bg-slate-200 py-12 z-50 relative'>
            <div className='flex gap-4 px-8'>
              <div className='w-[60%] flex flex-col justify-center gap-8 '>
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
