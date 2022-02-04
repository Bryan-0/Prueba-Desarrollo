import styles from '../../styles/Base/Footer.module.css';
import { brandLogo } from './Navbar';

const copyrightMessage = "© 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS";
const contactEmail = "info@clicasa.com";
const contactPhoneNumber = "911 123 456";

const footerSocialMediaLogosContainer = (
    <div className={styles.brandContainer}>
        <img className={styles.cursorPointer} src="/images/footer/facebook.svg" />
        <img className={styles.cursorPointer} src="/images/footer/twitter.svg" />
        <img className={styles.cursorPointer} src="/images/footer/linkedin.svg" />
        <img className={styles.cursorPointer} src="/images/footer/youtube.svg" />
    </div>
);

const footerOptionsContainer = (
    <div className={styles.brandContainer}>
        <div className={styles.cursorPointer}> Mapa web </div>
        <div className={styles.cursorPointer}> Contacto </div>
        <div className={styles.cursorPointer}> Aviso Legal </div>
    </div>
);

const desktopContactContainer = (
    <div className={styles.logoContainer}>
        <img className={styles.cursorPointer} width="55" src="/images/phone.svg" />
        <div>
            <span className={styles.footerText}>
                {contactPhoneNumber}
            </span>
        </div>
        <img className={styles.cursorPointer} width="55" src="/images/mail.svg" />
        <div>
            <span className={styles.footerText}>
                {contactEmail}
            </span>
        </div>
    </div>
);

const mobileContactContainer = (
    <div className={styles.logoContainer}>
        <div className={styles.flexContainer}>
            <img className={styles.cursorPointer} width="55" src="/images/phone.svg" />
            <span className={styles.footerText}>
                {contactPhoneNumber}
            </span>
        </div>
        <div className={styles.flexContainer}>
            <img className={styles.cursorPointer} width="55" src="/images/mail.svg" />
            <span className={styles.footerText}>
                {contactEmail}
            </span>
        </div>
    </div>
);

export default () => (
    <footer className={styles.footerWrapper}>
        <div className={styles.desktopView}>
            <div className={styles.footerContainer}>
                <div className={styles.brandContainer}>
                    {brandLogo}
                </div>
                {desktopContactContainer}
            </div>
        </div>
        <div className={styles.desktopView}>
            <div className={`${styles.footerContainer} ${styles.footerText} ${styles.textsm}`}>
                <div>
                    {copyrightMessage}
                </div>
                {footerOptionsContainer}
                {footerSocialMediaLogosContainer}
            </div>
        </div>

        <div className={styles.mobileView}>
            <div className={styles.textCenter}>
                {brandLogo}
            </div>
            {footerOptionsContainer}
            {mobileContactContainer}
            <div className={styles.mobileFooterText}>
                {copyrightMessage}
            </div>
            {footerSocialMediaLogosContainer}
        </div>

        <hr className={styles.footerLine} color="#e5e5e5" />
    </footer>
)