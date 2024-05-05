import React from 'react';
import '../../Css/Footer.css'

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
                        
                    </div>
                </div>

                <div className="footer-contacts">
                    <h2>Social Media</h2>
                    <br/>
                    {/* Add your social media links here */}
                </div>
                <div className='footer-more'>

                </div>
            </div>
            <div className="copyright">
                <p className="copyright-blog">© 2022 Gilbert Hutapea. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
