import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Collection() {

    // const collection = useSelector(state =>console.log(state))
    // console.log('collection log', collection);

    const collectionOfChampions = useSelector(state => state.collectionChamps)

    const img = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';

    const dispatch = useDispatch();

    const handleRemove = (i) => {
        dispatch({
            type:"REMOVE_CHAMPION",
            i
        })
    }

    if (collectionOfChampions.length === 0) {
        return (
            <div className='bodyHeight'>
                <h3 className='text-center'>Looks like you haven't added champions to your collection. Go over to <Link className='link' to={'/champions'}>Champions</Link> to add some now!</h3>
            </div>
        )
    }

    return (
        <div className='collection bodyHeight'>
            <h3>Your Collection of Champions</h3>
            <div className="row champions--cards">
                    {
                        collectionOfChampions.map((c, i) => (
                            <div key={c.key} className="collection--card col-12 col-md-6 col-lg-4  col-xxl-3 d-flex flex-column justify-content-center align-items-center mt-3">
                                    <div className='collection--banner' >
                                        <img className='collection--banner--img' src={`${img}${c.id}_0.jpg`} alt={`Card with image of champion ${c.id}`} />
                                        <div className="collection--banner--title h2 d-flex justify-content-between">
                                            <span>{c.id}</span>
                                            <button onClick={() => handleRemove(i)}>Remove</button>
                                        </div>
                                        
                                    </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}
