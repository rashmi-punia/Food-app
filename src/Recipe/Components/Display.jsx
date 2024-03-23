import React from 'react'
import { MdOutlineFoodBank } from "react-icons/md";
import {motion} from "framer-motion"
// import img from "recipe.jpg"

const variants={
    initial:{
        opacity:0,
        x:-100
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:0.2,
            staggerChildren:0.3,
            type:"spring",
            stiffness:100
        }
    }
}

const Display = () => {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" className='overflow-hidden shadow-md bg-white text-cyan-500 bg-couples bg-cover bg-center flex'>
    <div className=' bg-white shadow-lg m-3 flx '>
<div className='border-yellow-400 border-r-2 border m-4 flex flex-col items-center'>

      <div className='text-green-300 '>
      <div className=''>

    <svg  width="400" height="100" >
        <path id='curve' className='bg-transparent opacity-0'  d="M 0,100 Q 200,20 420,100">

        </path>
        <text className=' text-xl text-blue-400' textAnchor='middle'>
        <textPath className='text_path' href='#curve' startOffset="26%">Less stress &</textPath>
        <textPath className='text_path text-3xl' href='#curve' startOffset="53%">More Joy</textPath>
        <textPath className='text_path' href='#curve' startOffset="77%">right now!</textPath>
        </text>
    </svg>

      </div>
      </div>
      <motion.div variants={variants} className='text-center px-6 flex items-center text-cyan-500'>
      {/* <div className='flex gap-0.5'> */}
        <p className='text-wrap -mb-5'>Helping <span className='text-2xl'>15 Million</span> home cooks a month
        <span className='h-0.5 -my-4 w-full bg-cyan-500 inline-block'></span>
        <span className='h-0.5  w-full bg-cyan-500 inline-block'></span>

        </p>

      {/* </div> */}
        <MdOutlineFoodBank className='inline-block size-1/2 text-green-800 font-thin text-xs' />
        <p className='-mb-5'><span className='text-2xl'>over 3,000</span> tested and proven recipes
        <span className=''></span>
        <span className='h-0.5 -my-4 w-full bg-cyan-500 inline-block'></span>
        <span className='h-0.5 w-full bg-cyan-500 inline-block'></span>

        </p>

      </motion.div>
</div>
    </div>
      </motion.div>
    
  )
}

export default Display
