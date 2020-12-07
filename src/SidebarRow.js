import React from 'react';
import './SidebarRow.css';

function SidebarRow({Icon, Selected , title }) {
    return (
        <div className={`sidebarRow ${Selected && "Selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
