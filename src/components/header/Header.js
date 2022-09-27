import React, { useState } from "react";
import { navItems } from "./NavItems.js";

/* Assets */
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";

/* Style Sheet */
import styles from "./Header.module.css";

function scrollSection(ref) {
    if (ref[0] === "#") document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    else window.open(ref);
}

function Header() {

    const [menuState, setMenuState] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <section className={styles.left}>
                    <a href="/"><img src={logo} alt="Logo"/></a>
                    <a href="/"><h2>ben {"&"} queries</h2></a>

                </section>

                <section className={styles.right}>

                    {/* Menu Button */}
                    <img 
                        className={styles.menuIcon}
                        src={menu} 
                        alt="Nav Menu"
                        onClick={() => setMenuState(!menuState)} 
                    />

                    <div className={menuState ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
                        {navItems.map((item) => {
                            return <button onClick={() => scrollSection(item.ref)}className={item.className}>{item.name}</button>
                        })}
                    </div>


                </section>

            </div>
        </div>
    )
}

export default Header;