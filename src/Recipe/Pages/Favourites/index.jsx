import React,{useContext} from 'react'
import { GlobalContext } from '../../Context'
import Recipe_list from '../../Components/Recipe_list'


const Favourites = () => {
    const {favouritesList} = useContext(GlobalContext)
    return (
      <div className='py-5 container mx-auto flex justify-center flex-wrap gap-8'>
      {favouritesList && favouritesList.length > 0 ? 
       favouritesList.map((item => <Recipe_list item={item}/>)) 
       : <div>
        <p className='text-4xl font-extrabold text-center'>Nothing is added !</p>
       </div>}
      
        
      </div>
      )
}

export default Favourites
