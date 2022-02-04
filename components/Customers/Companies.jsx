import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../styles/Customers/Companies.module.css';

const Companies = () => (
    <div className={styles.companiesContainer}>
        <div className={styles.mainTitle}>Trabajamos con las mejores empresas</div>
        <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Container>
            <Row>
                <Col style={{ textAlign: 'right' }}>
                    <img className={styles.companyImg} src="/images/companies/company-one.png" alt="Inmoseguros Logo" />
                </Col>
                <Col>
                    <img className={styles.companyImg} src="/images/companies/company-two.png" alt="MAPFRE Logo" />
                </Col>
            </Row>
        </Container>
    </div>
)

export default Companies;