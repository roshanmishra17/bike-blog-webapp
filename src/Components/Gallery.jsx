import { useState } from 'react';
import '..//CSS/Gallery.css';
import Detail from './BIKE_Detail/DETAILS';
import BikeDetails from './BIKE_Detail/BikeDetail';
export default function Gallery({setSelectedBike}){

    const URL = [
        {
            url : 'https://wallpaperbat.com/img/9694146-royal-enfield-continental-gt-650.jpg',
            Name:'RE GT 650'
        },
        {
            url : 'https://wallpaperaccess.com/full/1398297.jpg',
            Name : 'RE Classic 350'
        },
        {
            url : 'https://wallpapercave.com/wp/wp14522427.png',
            Name : 'Harley Davidson X440'
        },
        {
            url : 'https://bikeloanemi.com/uploads/2022/06/honda-hness-cb350-pearl-night-star-black.jpg',
            Name : "Honda H'ness 350"
        },
        {
            url : 'https://wallpapercave.com/wp/wp13348961.jpg',
            Name : 'RE Himalayan 450'
        },
        {
            url : 'https://img.indianautosblog.com/2023/09/07/jawa-42-bobber-black-mirror-rear-quarter-37de.jpg',
            Name : 'JAWA 42 Bobber'
        },
        {
            url : 'https://www.motorcyclevalley.com/images/wallpapers/jawa%2042%20Bobber-29-1671791907.jpg',
            Name : 'JAWA 42'
        },
        {
            url : 'https://www.motocrossmag.co.th/main/wp-content/uploads/2023/06/1-22.jpg',
            Name : 'Triumph Scrambler 400'
        },
        {
            url : 'https://motos2023.com.br/wp-content/uploads/2022/12/gallery-12-1280x800-1.jpg',
            Name : 'RE Super Meteor 650'
        },
        {
            url : 'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/12/2024-royal-enfield-shotgun-650-full.jpg',
            Name : 'RE Shotgun 650'
        }
    ]




    return(
        <section className="Gallery" id='gallery'>
            <h2 className='Gallery-title'>Some Clicks From ME!!</h2>
            <div className='Gallery-div'>
                {URL.map((bike, index) => (
                    <div className="Gallery-Img" key={index}>
                        <img src={bike.url} alt={bike.Name} />
                        <div className="img-overlay">
                              <div className='overlay-content'>
                                <p>{bike.Name}</p>
                                <button className='overlay-btn' 
                                    onClick={() => {
                                        const BikeDetail = Detail.find(b => b.name === bike.Name); setSelectedBike(BikeDetail)
                                    }}>
                                    Get More Detail
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

        //     <Header/>
        // <Front/>
        // <Gallery/>
        // <Blog/>
        // <About/>
        // <Contact/>
        // <Footer/>
}