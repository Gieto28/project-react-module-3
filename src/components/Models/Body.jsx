import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Champions from '../pages/champions/Champions'
import Champion from '../pages/champions/Champion'
import HomePage from '../pages/HomePage'
import Collection from '../pages/Collection'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Items from '../pages/items/Items'
import Item from '../pages/items/Item'


export default function Body() {
    return (
        <div className='m-2'>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/champions" element={<Champions />} />
                <Route path="/champions/:champion" element={ <Champion />} />
                <Route path='/collection' element={<Collection /> } />
                <Route path='/items' element={<Items />} />
                <Route path='/items/:item' element={<Item />} />
                <Route path='/about' element={<About/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
