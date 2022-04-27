import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../AddOns/Loading';
import { useFetch } from '../../Hooks/fetchData';
import { champions, arrayOfChampions } from '../../scripts/arrayChampions';
import { AiOutlineSearch } from "react-icons/ai"


export default function Champions() {

    const url = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json';
    
    const img = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

    const {data, loading} = useFetch(url)

    const [filteredArray, setFilteredArray] = useState(champions)

    if (champions.length === 0) {
        arrayOfChampions(data);
    }
    
    const handleSearch = (value) => {    
        const newFilter = champions.filter(c => c.id.toLowerCase().replace(/ /g, '').includes(value))
        
        if (value === '') {
            setFilteredArray(champions)
        } else {
            setFilteredArray(newFilter)
        }
    }

    return (
        <div className='champions bodyHeight'>
            {loading && <Loading />}
            <div className='champions--search--menu ms-3 me-3 mt-2'>
                <AiOutlineSearch className='league--search--icon'/>
                <input onChange={e => handleSearch(e.target.value.toLowerCase())} type="text" name="searchChampions" id="searchChampions" className="league--search--input" placeholder=" Search.."/>
            </div>
            <div className="champions--list">
                {champions.id}
                <div className="row champions--cards">
                    {
                        filteredArray.map(c => (
                            <div key={c.key} className="champions--card col-12 col-md-6 col-lg-4  col-xxl-3 d-flex flex-column justify-content-center align-items-center mt-3">
                                <Link to={`/champions/${c.id}`}>
                                    <div className='champions--banner' >
                                        <img className='champions--banner--img' src={`${img}${c.id}_0.jpg`} alt={`Card with image of champion ${c.id}`} />
                                        <div className="champions--banner--title h2">
                                            <span>{c.id}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
