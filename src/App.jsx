import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Home/Hero/Hero';
import About from './components/Home/About/About';
import KsideDriven from './components/Home/KsideDriven/KsideDriven';
import Services from './components/Home/Services/Services';
import Projects from './components/Home/Projects/Projects';
import Reviews from './components/Home/Reviews/Reviews';
import Partners from './components/Home/Partners/Partners';
import Form from './components/Home/Form/Form';
import Map from './components/Home/Map/Map';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <KsideDriven />
      <Services />
      <Projects />
      <Reviews />
      <Partners />
      <Form />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
 