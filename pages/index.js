import Head from 'next/head';
import CitaMobile from '../components/Citas/CitaMobile';
import CitaOne from '../components/Citas/CitaOne';
import Companies from '../components/Customers/Companies';
import Feedback from '../components/Customers/Feedback';
import Footer from '../components/Base/Footer';
import Header from '../components/Base/Header';
import Navbar from '../components/Base/Navbar';
import Services from '../components/Services/Services';
import Steps from '../components/Steps/Steps';

export default function Home() {
  return (
    <div>
      <Head>
        <title> CliCasa </title>
        <meta name="description" content="CliCasa - Vende tu casa en tan solo un clic." />
        <link rel="icon" href="/images/clicasa_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />
      <Header />
      <Services />
      <Steps />
      <CitaOne />
      <Companies />
      <Feedback />
      <CitaMobile />
      <Footer />
    
    </div>
  )
}
