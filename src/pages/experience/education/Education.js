import React from 'react'
import { data } from "./EducationData.js";

import styles from "./Education.module.css";

function Education() {
    return (
        <div className={styles.container} id="#education">
            <div className={styles.header}>
                <h3>Education</h3>
                <hr />
            </div>
            
            <ul className={styles.content}>
                {data.map((item) => {
                    return <li className={styles.entryContainer}>
                        <h5>{!item.completed && "Expected "}{item.date}</h5>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>

                        <div className={styles.descriptionContainer}>
                            <div className={styles.descriptionContent}>
                                <div className={styles.description}>
                                    <div className={styles.triangle} />
                                    <p>{item.school}</p>
                                </div>
                                <div className={styles.description}>
                                    <div className={styles.triangle} />
                                    <p>{item.degree}</p>
                                </div>
                            </div>
                        </div>
                    </li>   
                })}
            </ul>

        </div>
    )
}

export default Education
