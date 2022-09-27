import React, { useState, useRef } from "react";
import { navItems } from "./NavItems.js";

/* Assets */
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

/* Style Sheet */
import styles from "./Header.module.css";

function scrollSection(ref) {
    if (ref[0] === "#") document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    else window.open(ref);
}

function Header() {

    const [menuState, setMenuState] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = (e) => {
        if (menuRef.current && menuState && !menuRef.current.contains(e.target)){
            setMenuState(false);
        }
    }
    document.addEventListener('mousedown', closeMenu);

    return (<>
        {menuState && <div className={styles.menuBackground}></div>}
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

                    

                    <div ref={menuRef} className={menuState ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>

                        

                        <div className={styles.navContent}>

                        <img className={styles.close} src={close} alt="Close" onClick={() => setMenuState(false)}/>
                            {navItems.map((item) => {
                                return <button onClick={() => scrollSection(item.ref)}className={item.className}>{item.name}</button>
                            })}
                        </div>
                    </div>


                </section>

            </div>
        </div>
        </>
    )
}

export default Header;