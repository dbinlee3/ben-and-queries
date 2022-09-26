import React from 'react'

import { data } from "./SidebarData.js";

import styles from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.container}>
            {data.map((item) => {
                return <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.name} className={styles.icon}/>
                </a>
            })}
            <div className={styles.line} />
        </div>
    )
}

export default Sidebar
