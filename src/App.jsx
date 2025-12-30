import { useState } from 'react'
import Header from './Components/Header'
import Front from './Components/FrontBanner'
import Gallery from './Components/Gallery'
import Blog from './Components/Blog'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import BikeDetails from './Components/BIKE_Detail/BikeDetail'


function App() {

    const[selectedBike,setSelectedBike] = useState(null);

    return(
      <>
        <Header/>
        <Front/>
        {selectedBike ? 
          (
            <BikeDetails bike={selectedBike} goBack={() => setSelectedBike(null)}/>
          ):(
              <Gallery setSelectedBike={setSelectedBike}/>
          )
        }
        <Blog/>
        <About/>
        <Contact/>
        <Footer/>

      </>
    )
}

export default App
