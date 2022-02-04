import styles from '../../styles/Base/Header.module.css';

const playerIcon = (
    <div className={styles.box}>
        <div className={styles.playerIcon}></div>
    </div>
)

export default () => (
    <div className={styles.headerImgBackground}>
        <h1>
            Vende tu casa <br /> 
            en un <span style={{ fontWeight: 'bold' }}> clic </span>
        </h1>
        <div className={styles.arrowDown}>
            <img width="80" src="/images/header/arrow-down.png" />
        </div>
        <div className={styles.searchInputWrapper}>
            <img className={styles.homeIcon} src="/images/header/home-icon.svg" />
            <input className={styles.searchInput} type="text" placeholder="Introduce la dirección de tu casa o piso" />
            <button className={styles.sellBtn}>VENDER MI INMUEBLE</button>
        </div>
        <button className={styles.mobileSellBtn}>VENDER MI INMUEBLE</button>
        <div className={styles.headerText}>
            Compramos tu casa directamente <br />
            sin complicaciones ni preocupaciones.
        </div>
        <button className={styles.videoBtn}>
            VER VÍDEO {playerIcon}
        </button>
    </div>
)