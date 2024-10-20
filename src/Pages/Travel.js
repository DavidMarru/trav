import React from 'react';
import Header from "./Header";  
import './TravelCon/Travel.css';
import styles from '../Pages/HolidayRentailsCon/Map1.module.css';
import Tittle from '../Tittle';
import Footer from "../Pages/Footer"; 
import Pixabay from '../img/pexels-pixabay-86703.jpg';

function Travel() {
    return (
        <div className="HolidayRentailsBody">
            <div className="wrapper">
                <div className='M5Rem'>
                    <Header />
                </div>
                <div className="Travel-Tittle">
                    <Tittle TittleName={'Travel'} />
                </div>
            </div>

            <div className={styles.summery}>
                <div className={styles.bg}>
                    <img className={styles.pexelsPixabay867031Icon} alt="" src={Pixabay} />
                    <div className={styles.backgrand} />
                </div>
                <div className={styles.loremIpsumDolorSitAmetConWrapper}>
                    <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Ornare diam scelerisque lacus at consectetur ut. Sem lectus odio vitae et pellentesque turpis magna. Quam elit aliquam tellus urna volutpat cursus suscipit ultricies facilisis. Etiam volutpat dignissim rhoncus sit cras.
                    </div>
                </div>
            </div>

            <div className="wrapper2">
                <div className="Page-Spacing">
                   
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Travel;
