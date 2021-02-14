import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/' className="social-logo">TRVL <i className="fa-fa-car"></i></Link>
            </div>
            <small className="website-rights">TRVL &copy; 2021</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook" 
                to='/'
                target='_blank'
                aria-label='Facebook'>
                    <i className="fa fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram" 
                to='/'
                target='_blank'
                aria-label='Instagram'>
                    <i className="fa fa-instagram"></i>
                </Link>
                <Link className="social-icon-link twitter" 
                to='/'
                target='_blank'
                aria-label='Twitter'>
                    <i className="fa fa-twitter"></i>
                </Link>
                <Link className="social-icon-link linkedin" 
                to='/'
                target='_blank'
                aria-label='Linkedin'>
                    <i className="fa fa-linkedin"></i>
                </Link>
                <Link className="social-icon-link youtube" 
                to='/'
                target='_blank'
                aria-label='Youtube'>
                    <i className="fa fa-youtube"></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
