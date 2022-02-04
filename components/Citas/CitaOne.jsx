import styles from '../../styles/Citas/CitaOne.module.css';

export default () => (
    <>
        <div className={styles.desktopCitaImg}>
            <img className={styles.citaImg} src="/images/citaOne/cita.png" />
        </div>
        <div className={styles.mobileCitaImg}>
            <img className={styles.citaImg} src="/images/citaOne/cita-mobile.png" />
        </div>
    </>
)