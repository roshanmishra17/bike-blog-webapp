import '..//CSS/Footer.css'
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Throttle Diaries</h3>
          <p>
            Sharing stories from the open road, tips, and biker adventures. Ride safe, ride free.
          </p>
        </div>

        <div className="links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <p>📍 Mumbai, Maharashtra</p>
          <p>📧 roshanbikeblog@gmail.com</p>
          <p>📞 +91 98765 43210</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Throttle Diaries. All rights reserved.</p>
      </div>
    </footer>
  );
}
