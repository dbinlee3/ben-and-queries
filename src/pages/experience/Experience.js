import React from 'react'
import Work from "./work/Work";
import Education from "./education/Education";

import styles from "./Experience.module.css";

function Experience() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Work />
                <Education />
            </div>
        </div>
    )
}

export default Experience;