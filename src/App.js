import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Intro from "./components/Intro";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from "./components/Portfolio";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


AOS.init();

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="intro">
        <Intro />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
