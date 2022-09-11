import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.css';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
