import './App.scss';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Home/Hero/Hero'
import About from './components/Home/About/About'
import KsideDriven from './components/Home/KsideDriven/KsideDriven'
import Services from './components/Home/Services/Services'
import Projects from './components/Home/Projects/Projects'
import Partners from './components/Home/Partners/Partners'
import Reviews from './components/Home/Reviews/Reviews'
import Form from './components/Home/Form/Form'
import Map from './components/Home/Map/Map'
import Footer from './components/Footer/Footer';
// import NotFoundPage from './components/Home/404Page/404Page'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <KsideDriven />
      <Services />
      <Projects />
      <Partners />
      <Reviews />
      <Form />
      <Map />
      <Footer />
    </div>
  );
}

// {/* <Router>
//   <Routes>
//     <Route path="/" element={<FeaturedProject />} />
//     <Route path="/404-project1" element={<NotFoundPage />} />
//     <Route path="/404-project2" element={<NotFoundPage />} />
//     <Route path="/404-project3" element={<NotFoundPage />} />
//   </Routes>
// </Router>; */}

export default App;
 