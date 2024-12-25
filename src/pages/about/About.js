import React from 'react'
import { aboutDescription, skills } from "../../TextData.js";

import photo from "../../assets/photos/ben-photo-2.png";

import styles from "./About.module.css";

function About() {

    function scrollSection(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className={styles.container} id="#about">
            <div className={styles.content}>
                <section className={styles.left}>

                    <div className={styles.header}>
                        <h3>About Me</h3>
                        <hr />
                    </div>

                    <p>
                    {aboutDescription.map((item) => {
                        
                        if (item[0] !== "#"){
                            if (item[item.length-1] === "\n"){
                                return <>{item}<div className={styles.newLine}/></>
                            }
                            else return item;
                        }

                        else {
                            return <span 
                                className={styles.aboutLink}
                                onClick={() => scrollSection("#projects")}
                                >
                                    {item.slice(1, item.length)}
                                </span>
                        }
                    })}
                    </p>

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