import React from 'react'
import { assets, footer_data } from '../assets/assets'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/10'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

        <div>
         <img src={assets.logo} alt="logo" className='w-32  sm:w-44 mt-[-60px] ml-[-23px] dark:invert'/>                                                                                                                                                                                        
            <p className='max-w-[410px] mt-[-50px]'>Built for storytellers who believe in the power of words to inspire, connect, and transform everyday thoughts into something meaningful.</p>
        </div>

        <div className='flex  justify-between w-full md:w-[45%] gap-5'>
            {footer_data.map((section, index)=> (
                <div key={index}>
                    <h3 className='font-semibold dark:invert text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                    <ul className='text-sm space-y-1'>
                        {section.links.map((link, i)=> (
                            <li key={i}>
                              <Link to={`/${link.toLowerCase()}`}
                                className='hover:underline transition'>
                                    {link}
                                </Link>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>


      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2026 © Writezy - All Right Reserved.</p>
      <p className='py-3 text-center text-sm text-gray-400 flex items-center justify-center gap-1.5 tracking-wide'>
  Made with
  <span className='inline-block animate-pulse text-red-400 text-base'>♥</span>
  by the Writezy Team
</p>

    </div>
  )
}


export default Footer