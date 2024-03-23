import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { GlobalContext } from "../Context";
import { FcLike } from "react-icons/fc";

const variants = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
      duration: 0.2,
    },
  },
};

const MotionLink = motion(Link);

const Recipe_list = ({ item }) => {
  const [showFavourite, setShowFavourite] = useState([]);
  const {
    recipeList,
    // setRecipeDetailsData,
    recipeDetailsData,
    favouritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

        // const isFavorite = item => {
        //   // Check if the recipe ID exists in the favoritesList
        //   return favouritesList.some(favorite => favorite.id === recipeDetailsData?.recipe?.id);
        // };

//   function handleIcon(){

//       recipeList.forEach(item => {
//         if (isFavorite(item.id)) {
//           setShowFavourite(item.id)
//           console.log(showFavourite)

//           console.log(`Recipe ${item.id} is a favorite.`);
//         } else {

//         }
//       });

//   }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white
 hover:border hover:border-b-8 hover:border-r-8 hover:border-l-0 hover:border-t-0 hover:border-yellow-400"
    >
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.02, skew: 2 }}
        className="h-40 relative flex justify-center items-center overflow-hidden rounded-xl"
      >
        <img src={item?.image_url} alt="recipe-item" className="block w-full" />
        {/* {favouritesList &&
              favouritesList.length > 0 &&
              favouritesList.some(
                (item) => item.id == recipeDetailsData?.recipe?.id
              ) 
                ? <div className="flex"><FcLike className="inline-block ml-2 size-5 text-white group-hover:text-red-600"/></div>

: null}    */}
   </motion.div>

      <motion.div variants={variants}>
        <motion.span
          variants={variants}
          className="text-sm text-cyan-700 font-medium"
        >
          {item?.publisher}
        </motion.span>
        <motion.h3
          variants={variants}
          className="font-bold text-2xl truncate tracking-wide text-black "
        >
          {item?.title}
        </motion.h3>
        <MotionLink
          initial={{}}
          whileHover={{ scale: 1.06, opacity: 0.7 }}
          whileTap={{ scale: 0.9, opacity: 1 }}
          transition={{ duration: 0.3 }}
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe details
        </MotionLink>
      </motion.div>
    </motion.div>
  );
};

export default Recipe_list;
