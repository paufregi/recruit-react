import React, { useState } from 'react'

import './Navigator.css'

interface NavigatorProp {
    isMenuOpen: boolean,
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Navigator: React.FC<NavigatorProp> = (prop) => {
    return (
        <div className='Navigator' onClick={prop.onClick}>
            {prop.isMenuOpen ?
                <div className='backIcon'>
                    <svg viewBox="0 0 100 80" width='40' height='40'>
                        <rect width="50" height="10" fill='white' transform='rotate(-45 40 20)'/>
                        <rect y="30" width="100" height="10" fill='white' />
                        <rect y="60" width="50" height="10" fill='white' transform='rotate(45 40 50)'/>
                    </svg>
                </div>
                :
                <div className='menuIcon'>
                    <svg viewBox="0 0 100 80" width='40' height='40'>
                        <rect width="100" height="10" fill='white'></rect>
                        <rect y="30" width="100" height="10" fill='white'></rect>
                        <rect y="60" width="100" height="10" fill='white'></rect>
                    </svg>
                </div>
            }
        </div>
    )
}

export default Navigator
