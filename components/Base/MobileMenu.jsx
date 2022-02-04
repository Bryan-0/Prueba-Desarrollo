import { useEffect } from 'react';
import styles from '../../styles/Base/MobileMenu.module.css';
import { brandText, renderMenuOptions } from './Navbar';

const MobileMenu = ({ isOpen, toggleMenu }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen, toggleMenu])

    return (
        <div className={isOpen ? styles.backgroundOpacity : ''}>
            <div className={isOpen ? `${styles.menuContainer} ${styles.menuContainerOpen}` : styles.menuContainer}>
                <button onClick={toggleMenu} className={styles.closeMenuBtn}>
                    <img width="20" src="/images/x-symbol.svg" />
                </button>
                <div className={styles.menuWrapper}>
                    <img width="40" src="/images/clicasa_logo.svg" /> {brandText}
                </div>
                <hr />
                <ul className={styles.menuOptions}>
                    {renderMenuOptions()}
                </ul>
            </div>
        </div>
    )
};

export default MobileMenu;