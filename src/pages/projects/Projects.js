import React from "react";
import { projects } from "./ProjectsData.js";

import styles from "./Projects.module.css";

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3>Projects</h3>
                    <hr />
                </div>

                <ul className={styles.projects}>
                    {projects.map((project) => {
                        return <li className={styles.projectContainer}>

                            {/* If a project is in progress, link to Github, else link to Website */}
                            <a className={styles.projectImgLink} 
                                href={project.inProgress 
                                ? project.links.find(item => item.name === "Github").link 
                                : project.links.find(item => item.name === "Website").link
                            } 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <img className={styles.projectImg} src={project.img} alt={project.name}/>
                            </a>

                            <div className={styles.projectContent}>

                                <div className={styles.projectHeader}>
                                    {project.inProgress && <h5>in development</h5>}
                                    <h3>{project.name}</h3>
                                </div>

                                <div className={styles.descContainer}>
                                    {project.desc.map((description) => {
                                        return <p className={styles.description}>{description}</p>
                                    })}
                                </div>

                                <div className={styles.projectLinks}>
                                    {project.links.map((link) => {
                                        return <a className={styles.projectLink} href={link.link} target="_blank" rel="noopener noreferrer">
                                            <img src={link.img} alt={link.name}/>
                                        </a>
                                    })}
                                </div>
                            
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Projects;