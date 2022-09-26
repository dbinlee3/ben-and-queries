import React from 'react'
import { data } from "./EducationData.js";

import styles from "./Education.module.css";

function Education() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Education</h3>
                <hr />
            </div>

            <ul className={styles.content}>
                {data.map((item) => {
                    return <li className={styles.entryContainer}>

                    </li>   
                })}
            </ul>

        </div>
    )
}

export default Education
