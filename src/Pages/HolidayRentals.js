import React from 'react';
import Header from "./Header";  
import './HolidayRentailsCon/HolidayRentals.css';
import styles from '../Pages/HolidayRentailsCon/Map1.module.css';
import Tittle from '../Tittle';
import Footer from "../Pages/Footer"; 
import Pixabay from '../img/pexels-pixabay-86703.jpg';
import DestinationsData from './HomeCon/DestinationsData'; 

function HolidayRentals() {
    return (
        <div className="HolidayRentailsBody">
            <div className="wrapper">
                <div className='M5Rem'>
                    <Header />
                </div>
                <div className="HolidayRentals-Tittle">
                    <Tittle TittleName={'Holiday Rentals'} />
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
                    <div className={styles.map}>
                        {DestinationsData.map((destination) => (
                            <div key={destination.id} className={styles.frameParent}>
                                <div className={styles.instanceChild}>
                                    <img 
                                        src={destination.images[0]} 
                                        alt={destination.name} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover', 
                                            borderRadius: '0.15rem', // Consistent with existing styles
                                        }} 
                                    />
                                </div>
                                <div className={styles.offRoadsWrapper}>
                                    {destination.rentals.map((rental, index) => (
                                        <div key={index} className={styles.offRoads}>
                                            <p1>{rental.type}</p1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HolidayRentals;
