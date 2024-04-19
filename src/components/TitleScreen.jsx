import React from 'react'
import './TitleScreen.css'
import Pokeball from '../assets/images/pokeball.png'
import { Link } from 'react-router-dom'

export const TitleScreen = () => {
    return (
        <div className='title-screen'>
            <div className='pokeballs-title'>
            <span><img className='title-pokeball' src={Pokeball} alt='Pokeball'/></span><h1>Rocketdex</h1><span><img className='title-pokeball' src={Pokeball} alt='Pokeball'/></span>
            </div>
            <Link to='/pokedex'>
                <button className='pokedex-button'>Pokédex</button>
            </Link>
            <Link to='/journey'>
                <button className='journey-button'>Journey</button>
            </Link>
        </div>
    )
}