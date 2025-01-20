import { useState } from 'react';
import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Project";
import backgroundImage from './assets/Home-bg.jpg'

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header />
      <div
        id="home"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
    </>
  );
}

export default App;