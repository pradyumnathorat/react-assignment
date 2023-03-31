import SingleCard from '_components/SingleCard/SingleCard';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { cardActions } from '_store';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"
const Allcards = () => {
    const Dispatch = useDispatch();

    useEffect(() => {
        Dispatch(cardActions.getAllCards())
    }, [])

    const cards = useSelector((state) => state.cards.cards.results)
    console.log(cards);
    return (
        <>
            <div>
                <Link to="/cards/new" ><button className='showCard' >New Card</button></Link>
                <div className='card-stack'>
                    {

                        cards ?
                            cards.map(card => (

                                <div className='card'>
                                    <SingleCard  props={card} />
                                </div>

                            ))
                            : <></>

                    }
                </div>

            </div>
        </>
    )
}

export default Allcards