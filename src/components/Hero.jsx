import React from "react";

const Hero = () => {
	return (
		<header className="[ Hero ]">
			<div className="[ Hero__inner ] [ wrapper wrapper-lg ]">
				<div
					className="Illustration Hero__svg Codeme 
							"
				>
					<pre>
						1  class <b>Person</b> {/*<!-- -->*/}
						{"{"}
					</pre>
					<pre>
						2      constructor() {/*<!-- -->*/}
						{"{"}
					</pre>
					<pre>
						3        this.name = &quot;
						<b>Faith Adeoti</b>
						&quot;;
					</pre>
					<pre>
						4        this.skills = [&quot;<b>Design</b>
						&quot;, &quot;<b>Dev</b>&quot;,<br></br>5 &quot;
						<b>Deployment</b>&quot;];
					</pre>
					<pre>
						6        this.stack = [&quot;<b>Node js</b>
						&quot;, &quot;<b>Express</b>&quot;,<br></br>7 &quot;
						<b>ASP.NET Core</b>&quot;,&quot;
						<b>React js</b>
						&quot;,<br></br>8 &quot;<b>MongoDB</b>
						&quot;,&quot;
						<b>Firebase</b>&quot;,<br></br>9 &quot;
						<b>Redis</b>
						&quot;];
					</pre>
					<pre>
						10      {/*<!-- -->*/}
						{"}"}
					</pre>
					<pre>
						11  {/*<!-- -->*/}
						{"}"}
					</pre>
				</div>
				<div className="[ Hero__content ] [ pad-around-lg ]">
					<p className="[ Hero__eyebrow ] [ font-cursive h5 ]">
						👋 <span>Hi, I'm faith</span>
					</p>
					<h1 className="[ Hero__heading ] [ h1 ]">
						I enjoy building
						<a className="outline js-fun"> creative</a> solutions
						and doing,
						<span className="js-interactive"> interesting </span>
						things with code. I also conduct academic researchs
						&amp;
						<a className="outline js-hover-write"> sing.</a>
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Hero;
