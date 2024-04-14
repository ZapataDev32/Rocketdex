import React from 'react'

export const DPadButtons = () => {
    return (
        <div className='d-pad-container'>
            <button className='d-pad-buttons' id='up-evolve'>Up</button>
            <button className='d-pad-buttons' id='right-index'>Right</button>
            <button className='d-pad-buttons'id='down-stats'>Down</button>
            <button className='d-pad-buttons'id='left-index'>Left</button>
        </div>
    )
}