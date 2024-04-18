import React from 'react'
import { Link } from 'react-router-dom'

export const LeftSideButton = () => {
    return (
        <div className='left-side-button-container'>
            <button className='select-button'>Select</button>
            <Link to='/'>
                <button className='home-button'>Home</button>
            </Link>
            <button className='menu-button'>Menu</button>
        </div>
    )
}