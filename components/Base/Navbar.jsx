import { useState } from 'react';
import styles from '../../styles/Base/Navbar.module.css';
import MobileMenu from './MobileMenu';

const menuOptions = [
    {
        name: 'VENDER',
        path: '#',
        selected: true
    },
    {
        name: 'COMPRAR',
        path: '#',
        selected: false
    },
    {
        name: '#YOELIJOCLICPISO',
        path: '#',
        selected: false
    },
    {
        name: '¿POR QUÉ CLICPISO?',
        path: '#',
        selected: false
    }
];

export const renderMenuOptions = () => {
    return menuOptions.map((option, idx) => {
        // Add chevron-down icon to the last option
        if (idx === menuOptions.length - 1) {
            return (
                <li className={option.selected ? styles.selectedOption : styles.menuOption} key={idx}>
                    <a href={option.path} className={styles.flexContainer}>
                        {option.name} <img style={{ marginLeft: '-5px' }} src="/images/chevron-down.svg" />
                    </a>
                </li>
            )
        }

        return (
            <li className={option.selected ? styles.selectedOption : styles.menuOption} key={idx}>
                <a href={option.path}>{option.name}</a>
            </li>
        );
    });
}

export const brandLogo = (
    <>
    <img width="40" src="/images/clicasa_logo.svg" />
    <span className={styles.textPrimary}>
        Cli
        <span className={styles.textDark}>
            Casa
        </span>
    </span>
    </>
)

export default () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
        <MobileMenu 
            isOpen={isMobileMenuOpen} 
            toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
        <nav className={styles.navContainer}>
            <div className={styles.navWrapper}>
                <div className={styles.flexContainer}>
                    <button onClick={() => setIsMobileMenuOpen(true)} className={styles.mobileMenuBtn}>
                        <img src="/images/bars.svg" />
                    </button>
                    {brandLogo}
                </div>

                <div className={styles.menuContainer}> 
                    {renderMenuOptions()} 
                </div>

                <div className={styles.logosContainer}>
                    <div className={`${styles.logosContainer} ${styles.mobileView}`}>
                        <img className={styles.cursorPointer} width="55" src="/images/phone.svg" />
                        <span className={styles.phoneNumberText}>
                            910 123 456
                        </span>
                    </div>
                    <div style={{ marginRight: '-12px' }}>
                        <img className={styles.cursorPointer} width="55" src="/images/whatsapp.svg" />
                    </div>
                    <div>
                        <img className={styles.cursorPointer} width="55" src="/images/mail.svg" />
                    </div>
                </div>

            </div>
        </nav>
        </>
    )
}