import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Recipe/Pages/Home'
import Favourites from './Recipe/Pages/Favourites'
import Detail from './Recipe/Pages/Detail'
import Navbar from './Recipe/Components/Navbar'

const App = () => {
  return (
    <div>
    <div className='min-h-screen p-8 bg-white/80 text-gray-600 text-lg font-fontBody'>
    <Navbar />
<div className='mt-12'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favourites' element={<Favourites/>}></Route>
      <Route path='/recipe-item/:id' element={<Detail/>}></Route>
    </Routes>

</div>
    </div>
    </div>
  )
}

export default App
