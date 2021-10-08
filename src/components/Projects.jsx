import React from "react";

const Projects = () => {
	return (
		<div>
			<section
				id="projects"
				className="[ Posts-intro js-browsers ] [ pad-around-xlg ]"
			>
				<div className="[ Posts-intro__inner ] [ wrapper sf-flow ]">
					<h2 className="[ Posts-intro__heading ] [ h1 ]">
						My side projects
					</h2>
					<article className="[ Browser js-browser ]">
						<a
							className="[ Browser__heading ] [ underline ]"
							rel="external"
							target="_blank"
							href="https://www.tinder-app-clone-abe8e.web.app/"
						>
							<h2 className="[ h5 ] [ underline__text ]">
								Tinder Clone
							</h2>
						</a>
						<p>
							This is an exploratory project that simply
							replicates the look and feel of Tinder. It fetches
							data from a self-developed API. It is a complete
							MERN stack project as it uses MongoDB database and a
							Node and Express API to complement the React JS
							frontend
						</p>
						<footer className="[ Browser__footer ]">
							<a
								className="[ arrow ]"
								rel="external"
								target="_blank"
								href="https://github.com/Techso/Tinder-Clone-App"
							>
								Check code out
							</a>
						</footer>
					</article>
					<article className="[ Browser js-browser ]">
						<a
							className="[ Browser__heading ] [ underline ]"
							rel="external"
							target="_blank"
							href="https://github.com/Techso/Social-Media-API"
						>
							<h2 className="[ h5 ] [ underline__text ]">
								Social Media API
							</h2>
						</a>
						<p>
							This project is an ongoing development of a social
							media API that automates authentication and
							authorization for socail media applications as well
							as other related functionalities.
						</p>
						<footer className="[ Browser__footer ]">
							<a
								className="[ arrow ]"
								rel="external"
								target="_blank"
								href="https://github.com/Techso/Social-Media-API"
							>
								Check code out
							</a>
						</footer>
					</article>
					<article className="[ Browser js-browser ]">
						<a
							className="[ Browser__heading ] [ underline ]"
							rel="external"
							target="_blank"
							href="https://github.com/Techso/Hatchway-Blog-Post-API"
						>
							<h2 className="[ h5 ] [ underline__text ]">
								Blog post API
							</h2>
						</a>
						<p>
							This project was developed as a solution to a
							preliminary assessment for a potential software
							engineer role. It is an API built with Node JS and
							Express JS to fetch blog posts from a third-party
							API by running concurrent requests for each tag
							parameter in a request and implements caching to
							improve performance.
						</p>
						<footer className="[ Browser__footer ]">
							<a
								className="[ arrow ]"
								rel="external"
								target="_blank"
								href="https://github.com/Techso/Hatchway-Blog-Post-API"
							>
								Check it out
							</a>
						</footer>
					</article>
				</div>
			</section>
		</div>
	);
};

export default Projects;
