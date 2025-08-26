import { faFacebookF } from "@awesome.me/kit-d5b9232d46/icons/classic/brands";
import { faGoogle } from "@awesome.me/kit-d5b9232d46/icons/classic/brands";
import { faInstagram } from "@awesome.me/kit-d5b9232d46/icons/classic/brands";
import { faArrowRight } from "@awesome.me/kit-d5b9232d46/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import logo from "@/assets/alex-ray-treatments-logo.svg";

import "./Footer.scss";

const Footer = function () {
	return (
		<footer className="footer fb-col-wrapper">
			<div className="footer__container">
				<div className="footer__copyright-wrapper">
					<img className="footer__logo" src={logo} alt="" width="48" height="48" />
					<h3 className="footer__copyright-heading">Alex Ray Wellbeing</h3>
					<p className="footer__copyright-text">
						Copyright © {new Date().getFullYear()} Alex Ray Wellbeing. All rights reserved.
					</p>
				</div>
				<div className="footer__content-wrapper">
					<div className="footer__links">
						<h3 className="footer__links-heading">Site map</h3>
						<NavLink to="/" className="footer__link">
							Home
						</NavLink>
						<NavLink to="/about" className="footer__link">
							About
						</NavLink>
						<NavLink to="/treatments" className="footer__link">
							Treatments
						</NavLink>
						<NavLink to="/book" className="footer__link">
							Book a treatment
						</NavLink>
					</div>
					<div className="footer__links">
						<h3 className="footer__links-heading">Legal</h3>
						<NavLink to="/terms-of-use" className="footer__link">
							Terms of Use
						</NavLink>
						<NavLink to="/privacy-policy" className="footer__link">
							Privacy Policy
						</NavLink>
						<NavLink to="/cookie-policy" className="footer__link">
							Cookie Policy
						</NavLink>
						<NavLink to="/accessibility-statement" className="footer__link">
							Accessibility
						</NavLink>
					</div>
					<div className="footer__links">
						<h3 className="footer__links-heading">Social</h3>
						<a
							href="https://maps.app.goo.gl/v4gXB1tBXtTBV6ecA"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__link footer__link--social"
						>
							<FontAwesomeIcon className="footer__social-icon" icon={faGoogle} />
							Google Maps
							<FontAwesomeIcon className="footer__social-arrow" icon={faArrowRight} />
						</a>
						<a
							href="https://www.instagram.com/alexraytreatments/"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__link footer__link--social"
						>
							<FontAwesomeIcon className="footer__social-icon" icon={faInstagram} />
							Instagram
							<FontAwesomeIcon className="footer__social-arrow" icon={faArrowRight} />
						</a>
						<a
							href="https://www.facebook.com/alexraytreatments/?locale=en_GB"
							rel="noopener noreferrer"
							target="_blank"
							className="footer__link footer__link--social"
						>
							<FontAwesomeIcon className="footer__social-icon" icon={faFacebookF} />
							Facebook
							<FontAwesomeIcon className="footer__social-arrow" icon={faArrowRight} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
