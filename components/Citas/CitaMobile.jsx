import styles from '../../styles/Citas/CitaMobile.module.css';

const CitaMobile = () => (
    <section className={styles.citaImgBackground}>
        <div className={styles.contentWrapper}>
            <div className={styles.citaTitle}>
                ¿Buscas casa? También tenemos las mejores ofertas
            </div>
            <div className={styles.citaContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
        </div>
        <div className={styles.citaButtonWrapper}>
            <button className={styles.citaButton}>
                VER INMUEBLES
            </button>
        </div>
    </section>
)

export default CitaMobile;