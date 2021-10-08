import React from "react";
import pics from "../assets/images/IMG_1847.JPG";

const About = () => {
	return (
		<div>
			<section id="about" className="[ Speaking ] [ pad-around-xlg ]">
				<div className="[ wrapper ]">
					<div className="[ Speaking__intro ]">
						<div className="[ Speaking__text ] [ sf-flow ]">
							<h2 className="[ Speaking__heading ] [ h1 ]">
								About Me.
							</h2>
							<p>
								I am Faith Adeoti, 22 years old software
								engineer born and raised in Nigeria. I value
								communication and transparency while building. I
								enjoy pair programming, video calls, and working
								with solution-driven teams built on
								transparency.
								<u
									style={{
										textDecorationColor: "#5e83e8",
										textDecorationThickness: "3px",
									}}
								>
									I love JavaScript like to the extreme and I
									am not your average software engineer
								</u>{" "}
								😎.
							</p>
							<p>
								I have my expertise in JavaScript, working
								primarily with Node JS & Express and building
								user-facing solution in React, but I have
								experience working in a wide range of
								technologies including MongoDB, Firesbase, React
								Native, REST API design, 3rd party APIs (Paypal,
								Flutterwave, Google Auth etc.), AWS (S3 &
								Cognito), Jest and Chai testing, and many more.
							</p>
						</div>
						<figure className="[ Speaking__image ]">
							<img
								style={{ objectFit: "contain" }}
								src={pics}
								alt="Faith at IORMS conference 2019"
							/>
						</figure>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
