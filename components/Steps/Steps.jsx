import styles from '../../styles/Steps/Steps.module.css';
import StepsGrid from './StepsGrid';

const Steps = () => (
    <div className={styles.stepsImgBackground}>
        <div className={styles.stepsMainTitle}>
            Vender tu piso nunca fue tan fácil
        </div>
        <p className={styles.stepsParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <StepsGrid />
    </div>
)

export default Steps;