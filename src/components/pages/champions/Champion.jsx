import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/fetchData';

import { arrayOfChampions, champions } from '../../scripts/arrayChampions';
import { findChampion } from '../../scripts/findChampion';



export default function Champion() {

    const url = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json';
    
    const img = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"    

    const {data} = useFetch(url)

    if (champions.length === 0) {
        arrayOfChampions(data);
    }

    let  { champion } = useParams();

    const championObject = findChampion(champions, champion);

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch({
            type:"ADD_CHAMPION",
            obj: championObject,
        })
    }

    const { blurb, id, title,  info = {}, stats = {}, tags } = championObject || {};

    return (
        <div className='champion bodyHeight d-flex align-items-center flex-column'>
            <div className='champion--background'>
                <img className='champion--background--img' src={`${img}${id}_0.jpg`} alt={`Image of champion ${id}`} />
                <div className='champion--background--gradient'></div>
            </div>
            <div className='champion--banner d-flex flex-column align-items-center col-12 mt-3'>
                <img className='champion--banner--splashArt align-self-center d-flex' src={`${img}${id}_0.jpg`} alt={`Image of champion ${id}`} />
                <div className='champion--banner--title display-1 text-uppercase'>
                    <span>{id}</span>
                </div>
                <div className="champion--blurb text-center">
                    <p className='text-capitalize h2'>{title}...</p>
                    <p className='h4'>{blurb}</p>
                </div>
            </div>
            <hr className='hr-color'/>
            <div className='d-flex text-center'>
                <Link className='link button--add--to--team me-2' to={"/champions"}>Go back!</Link>
                <button className='button--add--to--team' onClick={handleAdd}>Add To Team</button>
            </div>
            <hr className='hr-color'/>
            <div className='champion--details d-flex flex-row'>
                <div className='champion--info'>
                    <p className='h3 mb-3'>Champion info:</p> {
                        Object.entries(info).map(x => 
                        <div key={x}>
                            <p className='champion--info--height text-capitalize h5'> {x[0]}: {x[1]} </p> 
                            <br/>
                        </div > )
                    }
                </div>
                <div className='ms-4 champion--stats'>
                    <p className='h3 mb-3'>Champion stats:</p>
                    {
                        Object.entries(stats).map(x => 
                        <div key={x}>
                            <p className='champion--info--height text-capitalize h5' key={x}> {x[0]}: {x[1]} </p> 
                            <br/>
                        </div> )
                    }
                </div>
            </div>
        </div>
    )
}