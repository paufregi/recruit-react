import React, { useState } from 'react'

import './Menu.css'

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const clickHandle = () => setIsOpen(!isOpen)

    return (
        <div className="Menu">
            <ul>
                <li>This is the menu content</li>
            </ul>
        </div>
    )
}

export default Menu
