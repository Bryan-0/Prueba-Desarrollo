import styles from '../../styles/Services/Services.module.css';
import ServicesGrid from './ServicesGrid';

export default () => (
    <div className={styles.servicesContainer}>
        <div className={styles.servicesWrapper}>
            <h2 className={styles.servicesTitle}>
                En Clicasa sólo hay ventajas
            </h2>
            <p className={styles.servicesParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> 
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ServicesGrid />
        </div>
    </div>
)