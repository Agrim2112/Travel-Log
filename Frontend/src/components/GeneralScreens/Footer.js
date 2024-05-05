import React from 'react';
import '../../Css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import nature1 from '../images/nature1.jpg'
import nature2 from '../images/nature2.jpg'
import nature3 from '../images/nature3.jpg'
import travel from '../images/travel.png'
import logo from '../images/logo-no-background.png'

const Footer = () => {
    return (
        <div className="foot">
            <div className="footer">
                <div className="compney-brief">
                    <div className="footer-section about">
                        <h3 className="logo-text">Travel Tales</h3>
                        <p>
                            Tales that cover the entire World.
                        </p>
                    </div>

                    <div className="footer-logo">
                        <img src={logo} alt='logo' />
                    </div>
                </div>

                <div className="footer-contacts">
                    <h3>Contacts</h3>
                    <br/>
                        <div className='contact'>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+1 123 456 7890</span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faLocationPin} />
                                <span>123 Main St, City, Country</span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faClock} />
                                <span>Mon-Fri: 9am-5pm</span>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                </div>
                <div className='footer-more'>
                    <div className="picture-box sliding-pictures">
                        {/* <img src={nature1} alt="Image 1" />
                        <img src={nature2} alt="Image 2" />
                        <img src={nature3} alt="Image 3" /> */}
                        <img src={travel} alt='travel' />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright-blog">© 2022 Gilbert Hutapea. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
