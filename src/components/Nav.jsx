import React from "react";

const Nav = () => {
	return (
		<div>
			<header
				role="banner"
				className="[ Site-head ] [ pad-top-500 pad-bottom-500 ]"
			>
				<div className="[ wrapper wrapper-lg ]">
					<span className="visually-hidden">Techso.codes</span>
					<div
						className="
						[
						Site-head__inner
						]
						[
						box-flex
						space-between
						align-center
						]
					"
					>
						<a
							href="index.html"
							className="[ Site-head__site-name ] [ leading-tight ]"
							aria-current="page"
						>
							<img src="../assets/images/logo.jpeg" alt="" />
						</a>
						<nav className="nav">
							<ul
								className="
								[
								nav__list
								]
								[
								box-flex
								align-center
								md:space-before
								]
							"
							>
								<li className="nav__item">
									<a
										href="#about"
										className="nav__item-hover"
										data-id="writing"
									>
										<span
											className="nav__item-hover-inner"
											data-hover="About"
										>
											About
										</span>
									</a>
								</li>
								<li className="nav__item">
									<a
										href="#projects"
										className="nav__item-hover"
										data-id="speaking"
									>
										<span
											className="nav__item-hover-inner"
											data-hover="Projects"
										>
											Projects
										</span>
									</a>
								</li>
								<li className="nav__item">
									<a
										href="#contact"
										className="nav__item-hover"
										data-id="workshop"
									>
										<span
											className="nav__item-hover-inner"
											data-hover="Contact"
										>
											Contact
										</span>
									</a>
								</li>
							</ul>
						</nav>
						{/*<label className="switch js-night-toggle"
						><input
							className="switch__checkbox js-night-checkbox"
							type="checkbox"
						/>
						<span className="switch__toggle"></span> Toggle dark
						mode</label
                            >*/}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Nav;
