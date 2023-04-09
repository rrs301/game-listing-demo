import React, { useState } from 'react'
import genres from '../Data/genres'

function SideNavGenreList({selectedGenreId}) {

    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className=''>
        <h3 className='font-bold text-[30px] dark:text-white '>Genres</h3>
        {genres.map((item,index)=>(
            <div key={index} className={`flex gap-2 items-center cursor-pointer 
          group  transition-all duration-300 rounded-lg p-3 
          ${activeIndex==index?"bg-slate-300 dark:bg-gray-700 ":null}`} 
          onClick={()=>{setActiveIndex(index),selectedGenreId(item.id)}}>
                <img src={item.image_background} className={`w-[40px] h-[40px] 
                object-cover rounded-lg group-hover:scale-110  
                transition-all duration-300 ${activeIndex==index?"scale-110":null} `}/>
                <h3 className={`text-[18px] group-hover:font-bold   dark:text-white
                transition-all duration-300 ${activeIndex==index?"font-bold":null}`}>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default SideNavGenreList