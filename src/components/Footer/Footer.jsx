import React from "react";

import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerLogo } from "../../utils";
import TextLink from "../Button/TextLink";
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="container pt-5">
				<div className="row pt-4 pb-5 footer-wrapper">
					<div className="col-md-4">
						<img className="mb-3" src={footerLogo} alt="f2d white logo" />

						<p>Desires to obtain pain of it because it is pain, but occasionally circum</p>

						<div className="d-flex icons-wrapper mt-3">
							<FaFacebookF className="icon" />
							<FaLinkedin className="icon" />
							<FaInstagram className="icon" />
							<FaXTwitter className="icon" />
						</div>
					</div>
					<div className="col-lg-3 col-md-3 ps-3 ps-md-5 mt-4 mt-md-0">
						<p className="m-heading">Our Navigation</p>
						<ul className="mt-3">
							<li>
								<TextLink>About F2D</TextLink>
							</li>
							<li>
								<TextLink>Services</TextLink>
							</li>
							<li>
								<TextLink>Contact</TextLink>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
						<p className="m-heading">Contact Details</p>
						<ul className="mt-3">
							<li>
								<a>info@factory2Door.com</a>
							</li>
							<li>
								<a>+44 020 3343 9350</a>
							</li>
							<li>
								<a>159a High street,Hampton Hill,Hampton Tw12 1Nl</a>
							</li>
						</ul>
					</div>
				</div>
				<p className="text-center py-4 copyright">@ Copyright Factory2Door 2024 All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
