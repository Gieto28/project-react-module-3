import React, { useState } from 'react'
import Loading from '../../AddOns/Loading';
import { useFetch } from '../../Hooks/fetchData';
import { items, arrayOfItems } from '../../scripts/arrayItems';
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from 'react-router-dom';

export default function Items() {

    const url = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/item.json'

    const img = 'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/'

    const {data, loading} = useFetch(url)

    const [filteredArray, setFilteredArray] = useState(items)

    if (items.length === 0) {
        arrayOfItems(data);
    }
    
    const handleSearch = (value) => {    
        const newFilter = items.filter(i => i.name.toLowerCase().replace(/ /g, '').includes(value))
        
        if (value === '') {
            setFilteredArray(items)
        } else {
            setFilteredArray(newFilter)
        }
    }

    return (
        <div className='items bodyHeight'>
            {loading && <Loading />}
            <h3 className='items--title text-center'>LEAGUE OF LEGENDS ITEMS</h3>
                <div className='items--search--menu ms-3 me-3 mt-3 mb-2 text-center'>
                    <AiOutlineSearch className='league--search--icon'/>
                    <input onChange={e => handleSearch(e.target.value.toLowerCase())} type="text" name="searchItems" id="searchItems" className="league--search--input mt-2 mb-3" placeholder=" Search.."/>
                </div>
            <div className="row items--map">
                    {
                        filteredArray.map(item => (
                        <div className="items--card col-4 col-sm-3 col-md-2 col-lg-1 d-flex flex-column mt-1" key={item.image.full}>
                            <Link className='link' to={`/items/${item.name}`}>
                                <div className='items--card--content d-flex flex-column align-items-center justify-content-center'>
                                    <img title={item.name}  className='items--image' src={`${img}${item?.image?.full}`} alt={item.name}/>
                                    <p className=' mt-1 text-center'>{item.name}</p>
                                </div>
                            </Link>
                        </div>
                        ))
                    }
            </div>
        </div>
    )
}
