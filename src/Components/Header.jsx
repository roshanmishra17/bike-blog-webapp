import { useEffect, useState } from 'react'
import '../CSS/Header.css'
export default function Header(){

    const[isOpen,setIsOpen] = useState(false)
    const[scrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll',handleScroll);
    },[])
    
    function toggleMenu(){
        setIsOpen(!isOpen);
    }



    return(
        <header className={`container ${scrolled ? 'scroll':''}`}>
            <div className="logo">
                <h1>Throttle Diaries </h1>
            </div>
            <nav className={`nav ${isOpen ? 'open':" "}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    )
}