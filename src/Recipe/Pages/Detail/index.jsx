import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";
import {motion} from "framer-motion"
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa6";



const variants={
    initial:{
        opacity:0,
        x:100
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            type:"spring",
            staggerChildren:0.3,
            duration:1,
            delay:0.4
        }
        
    }
}

const Detail = () => {
  const { id } = useParams();

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favouritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <>

      <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
       className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div variants={variants} className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetailsData?.recipe?.image_url}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </motion.div>
        <motion.div variants={variants} className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 font-medium">
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {" "}
            {recipeDetailsData?.recipe?.title}
          </h3>
          <motion.div variants={variants}>
            <motion.button
               whileHover={{scale:1.06 , opacity:0.8}}
        whileTap={{scale:0.9 , opacity:1}}
        transition={{duration:0.2}}
              className="group p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
              onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            >
              {favouritesList &&
              favouritesList.length > 0 &&
              favouritesList.findIndex(
                (item) => item.id == recipeDetailsData?.recipe?.id
              ) !== -1
                ? "Remove from Favourites"
                : <div className="flex">Add to favourites<FaRegHeart className="inline-block ml-2 size-5 text-white group-hover:text-red-600"/></div>}
            </motion.button>
          </motion.div>
          <motion.div variants={variants}>
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            <motion.ul variants={variants} className="flex flex-col gap-3">
              {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                <motion.li value={variants}>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.description}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Detail;
