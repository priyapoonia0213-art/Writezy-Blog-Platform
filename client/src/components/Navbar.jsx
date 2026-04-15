import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className='flex justify-between h-30 items-center py-5 mx-8 sm:mx-20  xl:mx-32'>
           
            <img
                onClick={() => navigate('/')}
                src={assets.logo}
                alt="logo"
                className='cursor-pointer w-40 sm:w-56 xl:w-64 dark:invert'
            />

            <div className='flex items-center gap-4'>
               
                <button
                    onClick={toggleTheme}
                    className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300'
                >
                    {isDark ? (
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                        </svg>
                    ) : (
                       
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                    )}
                </button>

                
                <button
                    onClick={() => navigate('/admin')}
                    className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
                >
                    Login
                    <img src={assets.arrow} className='w-3' alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default Navbar