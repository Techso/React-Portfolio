import "./assets/index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<Nav />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
