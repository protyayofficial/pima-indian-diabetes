import React from 'react';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    
    const handleClickLearn = () => {
        navigate("/learn");
    };

    const handleClickPredict = () => {
        navigate("/predict");
    };

    return (
        <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center text-center pb-20">
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Diabetes<span className='text-blue-400 bold'>Help</span></h1>
            <h3 className='font-medium md:text-lg'>Your Path to <span className='text-red-400'>Wellness</span> </h3>
            <button onClick={handleClickLearn} className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4 '>
                <p className='text-blue-400'>Learn</p>
                <i className="fa-solid fa-graduation-cap "></i>
            </button>
            <button onClick={handleClickPredict} className='flex items-center text-base justify-between gap-4 mx-auto w-72 max-w-full specialBtn px-4 py-2 rounded-xl'>
                <p className='text-blue-400'>Check for Diabetes</p>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </main>
    )

}
