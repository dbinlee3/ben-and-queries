import React from "react";
import styles from "./Footer.module.css";

function handleContact() {
    window.open("mailto:dbinlee.3@gmail.com");
}

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Let's get in touch</h1>
                <h5 className={styles.coffee}>Want to know more? Grab a coffee?</h5>
                <button className="button-primary" onClick={handleContact}>Contact</button>

                <h5 className={styles.credits}>designed and built by Ben Lee</h5>
            </div>
        </div>
    )
}

export default Footer;