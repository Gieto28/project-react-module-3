import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/fetchData'
import { arrayOfItems, items } from '../../scripts/arrayItems'
import { findItem } from '../../scripts/findItem'

export default function Item() {

    const url = 'http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/item.json'

    const img = 'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/'

    const {data} = useFetch(url)

    if (items.length === 0) {
        arrayOfItems(data);
    }

    let { item } = useParams()

    const itemObject = findItem(items, item)

    const {description = "", effect, gold = {}, image = {}, into = {}, name = "", plaintext = "", stats = {}, tags = []} = itemObject || {};

    return (
        <div className='item bodyHeight'>
            <div className='item--header d-flex justify-content-evenly'>
                <div>
                    <h2>{name}</h2>
                    <p>{plaintext}</p>
                </div>
                <div>
                    <img className='item--img img-fluid item--border' src={`${img}${image.full}`} alt="" />
                </div>
            </div>
            <h4 className='h2'>Description:</h4>
            <div className='h5 mt-2' dangerouslySetInnerHTML={{__html: description}}>
            </div>


        </div>
    )
}
