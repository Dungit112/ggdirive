import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './sideBarItem.css'
const SideBarItem = (props) => {
    const {arrow, icon, label} = props
    return (
        <div>
            <div className='sidebarItem'>
            <div className="sidebarItem__arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>
            
            <div className='sidebarItem__main'>
                {icon}
                <p>{label}</p>
            </div>
        </div>
        </div>
    )
}

export default SideBarItem
