import React from 'react';
import { data } from "./WorkData.js";
import styles from "./Work.module.css";

function Work() {
    return (
        <div className={styles.container} id="#work">
            <div className={styles.header}>
                <h3>Work Experience</h3>
                <hr />
            </div>
            <ul className={styles.content}>
                {data.map((item) => {
                    return <li className={styles.entryContainer}>

                        <div className={styles.entryHeader}>
                            <div className={styles.entryHeaderText}>
                                <a className={styles.jobTitle} href={item.link} target="_blank" rel="noopener noreferrer">
                                    <h3>{item.title}</h3>
                                    <h3 className={styles.jobTitleGold}> @ {item.name}</h3>
                                </a>

                                <h5>{item.dates.start}&nbsp; - &nbsp;{item.dates.end}</h5>
                            </div>

                            <a className={styles.entryImgLink} href={item.link} target="_blank" rel="noopener noreferrer">
                                <img className={styles.entryImg} src={item.img} alt={item.name}/>
                            </a>
                        </div>

                        <div className={styles.descriptionContainer}>
                            <ul className={styles.descriptionContent}>
                                {item.bullets.map((bullet) => {
                                    return <li className={styles.description}>
                                        <div className={styles.triangle} />
                                        <p>{bullet}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Work
