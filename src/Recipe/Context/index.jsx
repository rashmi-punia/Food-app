import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

const items = [
  "apple",
  "pizza",
  "strawberry",
  "bread",
  "cake",
  "burger",
  "spring rolls",
  "chicken",
  "snacks",
  "rice",
  "dosa",
  "french fries",
  "toast",
  "others..",
];

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("apple");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredRecipe, setFilteredRecipe] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      console.log(data);
      console.log(favouritesList)
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        // setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  useEffect(() => {
    async function handleSubmit() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
        );
        const data = await res.json();
        console.log(data);
        if (data?.data?.recipes) {
          setRecipeList(data?.data?.recipes);
          setLoading(false);
          // setSearchParam("");
          navigate("/");
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
        setSearchParam("");
      }
    }
    handleSubmit();
  }, [searchParam]);

  function handleAddToFavorite(getCurrentItem) {
    let cpyFavouriteList = [...favouritesList];
    const index = cpyFavouriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavouriteList.push(getCurrentItem);
    } else {
      cpyFavouriteList.splice(index);
    }
    setFavouritesList(cpyFavouriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favouritesList,
        items,
        setFilteredRecipe,
        setShowDropdown,
        showDropdown,
        filteredRecipe,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
