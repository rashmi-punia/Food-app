import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context";
import Recipe_list from "../../Components/Recipe_list";
import { motion } from "framer-motion";
import Display from "../../Components/Display";



const Home = () => {
  const { recipeList, Loading,searchParam, setSearchParam, handleSubmit,items } =
  useContext(GlobalContext);
  let [activeTab, setActiveTab] = useState(items[0]);

  // function updateState(id){
  //   console.log(id)
  //                  setSearchParam(id.id),
  //                    setActiveTab(id),
  //                     handleSubmit()
    
  // }

  if (Loading) return <div>Loading please wait for a while..</div>;
  return (
    <>
      <div className="py-5 container mx-auto flex justify-center flex-wrap gap-10">
        <div className=" mx-auto block text-black/70 mt-12">
          <div className="flex gap-2 flex-wrap *:p-1 *:px-3">
            {items.map((itemName) => (
              <button
                onClick={() => {
                   setActiveTab(itemName),
                  //  setActiveSpan(prev=>{prev+1})
                  setSearchParam(itemName),
                    handleSubmit()
                }
                }
                // className='rounded-full bg-red-200 border border-black/60'>
                className={`${
                  activeTab === itemName ? " " : "hover:text-white/60"
                } 
            relative rounded-full px-3 py-1.5 text-base font-medium border border-yellow-300 text-red-300 outline-black transition focus-visible:outline-2 focus:border-none `}
              >
                {activeTab  === itemName  &&(
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", duration: 0.6 }}
                    className="absolute border-none  inset-0 bg-yellow-300/85"
                    style={{
                      borderRadius: 9999,
                    }}
                  ></motion.div>
                )}
                <span className="relative z-10 mix-blend-exclusion">
                  {" "}
                  {itemName}{" "}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
         <Display/>
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((item) => <Recipe_list item={item} />)
          ) : (
            <div>
              <p className="text-4xl font-extrabold text-center">
                Nothing to show please search something else..
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
