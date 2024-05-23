import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Frameworks from './components/Frameworks';
import Databases from './components/Databases';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />}>
            <Route index element={<Languages />} />
            <Route path="/skills/languages" element={<Languages />} />
            <Route path="/skills/frameworks" element={<Frameworks />} />
            <Route path="/skills/databases" element={<Databases />} />
          </Route> 
          <Route path="/contact" element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}
 
export default App;
 