import React from 'react'

import logo from "../../assets/icons/logo.svg";
import doubleArrow from "../../assets/icons/double-arrow.svg";
import photo from "../../assets/photos/ben-photo-1.svg";

import { landingDescription } from "../../TextData.js";

import styles from "./Landing.module.css";

function scrollNext(ref) {
    document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
}

function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <section className={styles.left}>
                    
                    <div className={styles.leftContent}>
                        <img src={logo} className={styles.logo} alt="Logo"/>
                        <h1>ben {"&"} queries</h1>
                        <hr />
                    </div>

                    <img src={photo} className={styles.photo} alt=""/>

                </section>


                <section className={styles.right}>

                    <h1>Ben Lee.</h1>

                    <h4>{landingDescription}</h4>
                    <img src={doubleArrow} alt="" onClick={() => scrollNext("#about")}/>
                </section>
            </div>
        </div>
    )
}

export default Landing
