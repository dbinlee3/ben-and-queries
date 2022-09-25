import React, { useState } from "react";
import { navItems } from "./NavItems.js";

/* Assets */
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";

/* Style Sheet */
import styles from "./Header.module.css";

function Header() {

    const [menuState, setMenuState] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <section className={styles.left}>

                    <img src={logo} alt="Logo"/>
                    <h2>ben {"&"} queries</h2>

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
                            return <button onClick={() => alert(item.name)}className={item.className}>{item.name}</button>
                        })}
                    </div>


                </section>

            </div>
        </div>
    )
}

export default Header;