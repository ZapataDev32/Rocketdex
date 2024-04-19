import React from 'react'
import { clearData, fetchData, incrementId, decrementId, inputId } from '../features/dataSlice.js'
import { useDispatch } from 'react-redux'


export const DPadButtons = () => {
    
    const dispatch = useDispatch()
    return (
        <div className='d-pad-container'>
            <button className='d-pad-buttons' id='up-evolve'>Up</button>
            <button 
            className='d-pad-buttons' 
            id='right-index'
            onClick={() => dispatch(incrementId())}
            >Right</button>
            <button className='d-pad-buttons'id='down-stats'>Down</button>
            <button className='d-pad-buttons'id='left-index' onClick={() => dispatch(decrementId())}>Left</button>
        </div>
    )
}