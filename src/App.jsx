import './App.css'
import About from './components/About/About';
import Bot from './components/Bot/Bot';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Photography from './components/photography/Photography';

function App() {
  
  return (
<>
<Navbar/>
<Bot />
<Home /> 
<Skills />
<About />
<Photography />
<Contact />
<Footer />
</>
  );
  }
export default App
