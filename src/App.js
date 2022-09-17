import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import 'bootstrap/dist/css/bootstrap.css';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
