import React from "react";
import PropTypes from "prop-types";
import '../Footer.css'
function Footer({
    divClassName,
    divClassNameOverride,
    divClassName1,
    divClassName2,
    divClassName3,
    divClassName4,
    divClassName5,
    divClassName6,
    divClassName7,
    divClassName8,
    tikTok,
    facebook,
    instagramCircle,
    twitterCircled,
}) {
    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="top-left">
                    <div className="WebsiteName">
                        <div className="text-wrapper">WORLD NAVIGATION</div>
                    </div>
                    <div className="div">
                        <div className={`text-wrapper-2 ${divClassName}`}>HOME</div>
                        <div className={`text-wrapper-3 ${divClassNameOverride}`}>THINGS TO DO</div>
                        <div className={`text-wrapper-4 ${divClassName1}`}>TRAVEL</div>
                        <div className={`text-wrapper-5 ${divClassName2}`}>HOLIDAY RENTALS</div>
                        <div className={`text-wrapper-6 ${divClassName3}`}>ABOUT US</div>
                    </div>
                    <div className="add-on-links">
                        <div className={`text-wrapper-7 ${divClassName4}`}>BLOG</div>
                        <div className={`text-wrapper-8 ${divClassName5}`}>FAQs</div>
                    </div>
                </div>
                <div className="media-links-wrapper">
                    <div className="div">
                        <div className="group">
                            <img className="tik-tok" alt="Tik Tok" src={tikTok} />
                            <img className="facebook" alt="Facebook" src={facebook} />
                            <img className="instagram-circle" alt="Instagram" src={instagramCircle} />
                            <img className="twitter-circled" alt="Twitter" src={twitterCircled} />
                        </div>
                        <div className="Contacts">
                            <p className={`text-wrapper-8 ${divClassName6}`}>Phone Number: +1 (123) 456-7890</p>
                            <div className={`text-wrapper-8 ${divClassName7}`}>Email: contact@worldnavigation.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-lower">
                <div className="botton">
                    <div className="copyright">
                        <p className={`p ${divClassName8}`}>
                            © 2024 MWD3ESIGN. All rights reserved. Designed and developed by MWD3ESIGN.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Default PropTypes
Footer.defaultProps = {
    divClassName: "",
    divClassNameOverride: "",
    divClassName1: "",
    divClassName2: "",
    divClassName3: "",
    divClassName4: "",
    divClassName5: "",
    divClassName6: "",
    divClassName7: "",
    divClassName8: "",
};

// PropTypes validation
Footer.propTypes = {
    divClassName: PropTypes.string,
    divClassNameOverride: PropTypes.string,
    divClassName1: PropTypes.string,
    divClassName2: PropTypes.string,
    divClassName3: PropTypes.string,
    divClassName4: PropTypes.string,
    divClassName5: PropTypes.string,
    divClassName6: PropTypes.string,
    divClassName7: PropTypes.string,
    divClassName8: PropTypes.string,
    tikTok: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    instagramCircle: PropTypes.string.isRequired,
    twitterCircled: PropTypes.string.isRequired,
};

export default Footer;
