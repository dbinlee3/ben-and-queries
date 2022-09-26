import React from 'react';
import { data } from "./WorkData.js";
import styles from "./Work.module.css";

function Work() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Work Experience</h3>
                <hr />
            </div>
            <ul className={styles.content}>
                {data.map((item) => {
                    return <li className={styles.entryContainer}>

                        <div className={styles.entryHeader}>
                            <div className={styles.entryHeaderText}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <h3>{item.title}</h3>
                                    <h3>@ {item.name}</h3>
                                </a>
                            </div>

                            <a className={styles.entryImgLink} href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className={styles.entryImg} src={item.img} alt={item.name}/>
                            </a>
                        </div>

                        <div className={styles.descriptionContainer}>
                            {item.bullets.map((bullet) => {
                                return <li>
                                    <div className={styles.triangle} />
                                    <p>{bullet}</p>
                                </li>
                            })}
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Work
