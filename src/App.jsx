import { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-scroll';
=======
>>>>>>> 2949d795d1d442ebc0d5c230d75ffcf7548a1c81
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Project";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
<<<<<<< HEAD

=======
>>>>>>> 2949d795d1d442ebc0d5c230d75ffcf7548a1c81
