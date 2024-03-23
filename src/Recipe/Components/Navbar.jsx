import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import { NavLink } from "react-router-dom";
import Suggestions from "./Suggestions";
import {motion} from "framer-motion"
import { SiIfood } from "react-icons/si";
import { BsSearchHeartFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";



const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit,
    recipeList,filteredRecipe,setShowDropdown,items ,showDropdown,setFilteredRecipe} =
    useContext(GlobalContext);
  //   console.log(searchParam);

  function handleChange(e){
    const query = e.target.value.toLowerCase()
    setSearchParam(query)
    if(query.length > 1){
      const textRecipe = items && items.length ? 
      items.filter((item) => item.toLowerCase().indexOf(query) > -1)
      : []
      setFilteredRecipe(textRecipe)
      setShowDropdown(true)
    }else{
      setShowDropdown(false)
    }

  }
  function handleClick(e){
    setShowDropdown(false)
    setSearchParam(e.target.innerText)
    setFilteredRecipe([])

  }
  return (
    <nav className="z-20 fixed left-0 right-0 top-0 flex justify-between items-center p-6 shadow-sm  mx-auto w-full bg-white lg:flex-row gap-5 lg:gap-0">
      <motion.h2
      initial={{opacity:0,x:-220,rotate:"180deg"}}
      animate={{x:0,rotate:"0deg"}}
      whileInView={{opacity:1}}
      transition={{duration:0.4,type:"spring",stiffness:"70"}}
       className="text-2xl font-semibod font-fontLogo italic text-transparent bg-clip-text bg-gradient-to-br from-purple-700 via-cyan-400 to-pink-500">
       
        <NavLink to={"/"}>Food
        <SiIfood className="inline-block text-red-400" />
 Recipe</NavLink>
      </motion.h2>
     
      <form onSubmit={handleSubmit}>
        <label for="search" className="group">
<BsSearchHeartFill className="-mr-12 size-6 inline-flex text-black group-hover:text-red-700 opacity-100"/>
        <input
          type="text"
          id="search"
          name="search"
          value={searchParam}
          onChange={handleChange}
          placeholder="Enter item.."
          autoComplete="off"
          className="bg-white/75  relative p-3 px-11 ml-4 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"

        />

        </label>
        {showDropdown && <Suggestions handleClick={handleClick} data={filteredRecipe} />}

      </form>
      <ul className="flex gap-5 *:duration-300 text-black ">
        <li>
          <NavLink to={"/"} className="hover:text-gray-700 relative group">
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform origin-center transition-transform duration-300  scale-x-0 group-hover:scale-x-100"></span>
          </NavLink>
        </li>
        <li className="inline-block relative group">
          <NavLink to={"/favourites"} className="hover:text-gray-700">
            Favourites
<CiHeart className="inline-flex size-5 group-hover:text-red-500" />
          </NavLink>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform origin-center transition-transform duration-300  scale-x-0 group-hover:scale-x-100"></span>

        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
