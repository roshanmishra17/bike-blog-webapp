import '../CSS/About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About the Blog</h2>
          <p>
            Welcome to <span>Throttle Diaries</span> — a space where passion meets the open road. 
            I’m Roshan, a bike enthusiast who believes every ride tells a story. 
            From long highway cruises to short city spins, I share my experiences, 
            thoughts, and tips for fellow riders who live for the thrill of two wheels.
          </p>
          <p>
            This blog isn’t just about bikes — it’s about the journey, the freedom, 
            and the moments that stay with you long after the engine stops. 
            Whether you're a seasoned rider or a beginner, there’s something here for everyone.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://wallpapercave.com/wp/wp12598560.jpg"
            alt="Bike Ride"
          />
        </div>
      </div>
    </section>
  );
}
