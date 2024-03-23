import React from 'react'

const Suggestions = ({data,handleClick}) => {
  return (
    <div className='absolute w-2/5 z-10 mx-auto p-1 *:rounded-md'>
       <ul className=" bg-white/75 shadow-lg border border-white my-1 text-black/85">
      {data && data.length
        ? data.map((item, index) => (
            <li
              onClick={handleClick}
              key={index}
              className="hover:bg-gray-100 px-3 py-2 rounded-md hover:text-black hover:duration-300 hover:font-semibold "
            >
              {item}
            </li>
          ))
        : null}
    </ul>
    </div>
  )
}

export default Suggestions
