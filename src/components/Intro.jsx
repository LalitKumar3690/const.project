// Intro.js
import React, { useEffect, useState } from 'react';
import Logo1 from '../assets/logo.png'
import Logo2 from '../assets/logotext.png'
// import './Intro.css';

const Intro = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true); // Start fade out after 3 seconds
        }, 4000);
        
        const finishTimer = setTimeout(() => {
            if (fadeOut) {
                onFinish(); // Call the onFinish function after fade out
            }
        }, 1000); // Wait for fade out animation to complete

        return () => {
            clearTimeout(timer);
            clearTimeout(finishTimer);
        };
    }, [onFinish, fadeOut]);

    return (
        <div className='overflow-hidden'>
        <div className={`${fadeOut ? 'boxdropup' : 'boxdropdown '}  flex w-screen h-screen bg-slate-400 justify-center items-center `}>
            <div className={` h-52 w-max p-4 flex flex-col justify-center gap-5 items-center  `}>
                <div className={` flex h-1/2 w-full border-b-2 border-black/30 items-center `}>
                    <img src={Logo1} alt="Logo" className={`${fadeOut ? 'reverseleft' : 'lefttext'} leftmotion w-full h-full `}/>
                    <img src={Logo2} alt="Logo" className={`${fadeOut ? 'reverseright' : 'rightmotion'} rightmotion w-full h-2/3 `}/>
                </div>
                <h1 className={`text-2xl font-semiboldld textmotion `}>Welcome To Viewers</h1>
            </div>
        </div>
        </div>
    );
};

export default Intro;
