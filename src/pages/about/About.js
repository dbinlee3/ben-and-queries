import React from 'react'
import { aboutDescription, skills } from "../../TextData.js";

import photo from "../../assets/photos/ben-photo-2.svg";

import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <section className={styles.left}>

                    <div className={styles.header}>
                        <h3>About Me</h3>
                        <hr />
                    </div>

                    <p>{aboutDescription}</p>

                    <ul className={styles.skillsList}>
                        {skills.map((item) => {
                            return <li>
                                <div className={styles.triangle} />
                                <p>{item}</p>
                            </li>
                        })}
                    </ul>

                </section>

                <section className={styles.right}>
                    <img src={photo} className={styles.photo} alt=""/>
                </section>
            </div>
        </div>
    )
}

export default About