import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../../styles/Steps/Steps.module.css';

const steps = [
    {
        number: 1,
        title: 'Descríbemos tu inmueble',
        content: 'No te preocupes de su estado, ni de reparaciones para eneseñarlo'
    },
    {
        number: 2,
        title: 'Recibe una oferta en 24 horas',
        content: 'Piénsatela!'
    },
    {
        number: 3,
        title: 'Dinos hasta cuando quieres quedarte',
        content: 'Nos ajustamos a tus necesidades, cuando tu estés listo nosotros también lo estaremos'
    },
    {
        number: 4,
        title: 'Ya está!',
        content: 'Firma la venta y recibe el dinero'
    }
]

const renderStepNumberStyled = ({number, title}) => (
    <div className={styles.mobileStepTitleWrapper}>
        <div className={styles.stepNumber}>
            {number}
        </div>
        <div className={styles.mobileStepTitle}>
            {title}
        </div>
    </div>
)

const renderSteps = () => (
    steps.map((step, index) => (
        <Col className={styles.gridStepsWrapper} lg={true} key={index}>
            <Container style={{ paddingTop: '1.6rem' }}>
                <Row>
                    <Col md="auto" style={{ padding: 0 }}>
                        {renderStepNumberStyled(step)}
                    </Col>
                    <Col style={{ textAlign: 'left' }}>
                        <span className={styles.stepTitle}>{step.title}</span>
                        <p className={styles.stepContent}>{step.content}</p>
                        <img className={styles.mobileStepImage} src="/images/steps/group.png" alt="steps-img" />
                    </Col>
                </Row>
            </Container>
        </Col>
    ))
)

const StepsGrid = () => (
    <div className={styles.stepsWrapper}>
        <Container>
            <Row>
                {renderSteps()}
            </Row>
            <Row className={styles.desktopStepImage}>
                <Col style={{ padding: 0, margin: 0 }} span={4}>
                    <img className={styles.stepImage} src="/images/steps/group.png" alt="steps-img" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default StepsGrid;