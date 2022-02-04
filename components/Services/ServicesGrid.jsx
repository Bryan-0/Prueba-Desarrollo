import { Col, Container, Row } from "react-bootstrap";
import styles from '../../styles/Services/Services.module.css';

const services = [
    {
        icon: '/images/services/clock.svg',
        title: 'Oferta en 24h',
        description: 'No te preocupes de su estado, ni de reparaciones para eneseñarlo',
    },
    {
        icon: '/images/services/wallet.svg',
        title: 'Pago inmediato',
        description: 'No te preocupes de su estado, ni de reparaciones para eneseñarlo',
    },
    {
        icon: '/images/services/paperplane.svg',
        title: 'Ahórrate el papeleo',
        description: 'Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar',
    },
    {
        icon: '/images/services/calendar.svg',
        title: 'Tu eliges la fecha',
        description: 'Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar',
    }
]

const renderServices = () => (
    services.map((service, index) => (
        <Col lg={true} key={index}>
            <div className={styles.desktopViewServices}>
                <img src={service.icon} alt=""/>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceContent}>{service.description}</p>
            </div>
            <div className={styles.mobileViewServices}>
                <img src={service.icon} alt=""/>
                <div className={styles.mobileViewContent}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <span className={`${styles.serviceContent} ${styles.mobileServiceContent}`}>{service.description}</span>
                </div>
            </div>
        </Col>
    ))
)

const ServicesGrid = () => (
    <div className={styles.servicesGridWrapper}>
        <Container>
            <Row>
                {renderServices()}
            </Row>
        </Container>
    </div>
)

export default ServicesGrid;