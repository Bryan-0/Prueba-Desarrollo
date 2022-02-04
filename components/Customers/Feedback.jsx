import { useState, useEffect } from 'react';
import { getAllFeedbacks } from '../../services/apis/feedback';
import styles from '../../styles/Customers/Feedback.module.css';

const isElementInViewport = (el) => {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
}

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [currentFeedbackPosition, setCurrentFeedbackPosition] = useState(0);

    useEffect(() => {
        const fetchFeedback = async () => {
            const { data } = await getAllFeedbacks();
            setFeedbackList(data);
        }
        fetchFeedback();
    }, []);

    const handleScroll = () => {
        const firstFeedback = document.getElementById(`fName-1`);
        const secondFeedback = document.getElementById(`fName-2`);
        const thirdFeedback = document.getElementById(`fName-3`);

        if (firstFeedback && secondFeedback && thirdFeedback) {
            setTimeout(() => {
                if (isElementInViewport(firstFeedback)) {
                    setCurrentFeedbackPosition(0);
                } else if (isElementInViewport(secondFeedback)) {
                    setCurrentFeedbackPosition(1);
                } else {
                    setCurrentFeedbackPosition(2);
                }
            }, 500);
        }
    }

    const renderCustomersFeedback = () => (
        feedbackList.map((feedback, idx) => (
            <div className={styles.slide} key={feedback.id} id={feedback.id}>
                <img className={styles.feedbackImg} src={feedback.imgSrc} />
                <div className={styles.customerFeedbackContent}>
                    {feedback.content}
                </div>
                <div id={`fName-${idx + 1}`} className={styles.customerFeedbackName}>
                    {feedback.name}
                </div>
            </div>
        ))
    );


    const renderFeedbackNavigation = () => (
        [...feedbackList.keys()].map((idx) => (
            <div onClick={() => {
                setCurrentFeedbackPosition(idx);
                document.getElementById(`${idx + 1}`).scrollIntoView({
                    block: 'nearest'
                });
            }} className={currentFeedbackPosition === idx ? styles.feedbackNavigationActive : styles.feedbackNavigation}
            key={idx}></div>
        ))
    );

    return (
        <>
            <section className={styles.feedbackWrapper}>
                <div className={styles.feedbackSectionTitle}>
                    Nuestra mejor referencia, nuestros clientes
                </div>
                <p className={styles.feedbackContent}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </section>
            <div className={styles.desktopWrapper}>
                <div onScroll={handleScroll} className={styles.slider}>
                    {renderCustomersFeedback()}
                </div>
            </div>
            <div className={styles.feedbackNavContainer}>
                {renderFeedbackNavigation()}
            </div>
        </>
    )
}

export default Feedback;