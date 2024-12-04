import './Footer.scss';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Privacy Policy</a></li>
            <li><a href="/projects">Terms of Use</a></li>
            <li><a href="/blog">Careers</a></li>
            <li><a href="/about">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Need Help?</h4>
          <ul>
            <li><a href="mailto:support@kside.com">suport@kside.com</a></li>
            <li><a href="tel:+1234567890">+123 456 7890</a></li>
          </ul>

          {/* Social Media Section */}
          <div className="footer-section">
          <h4>Socials</h4>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
            </li>
            <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
        </div>

        

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/about">FAQ</a></li>
            <li><a href="/careers">Cookies</a></li>
            <li><a href="/projects">License</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h4>Stay ahead with the latest in software innovation!</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Privacy Policy</p>
        <p>&copy; {new Date().getFullYear()} Kside. All rights reserved.</p>
        <p>Powered by Kside</p>
      </div>
    </footer>
  );
};

export default Footer;
