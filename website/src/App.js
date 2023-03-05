import './App.css';
import InfiniteScroll from './components/InfiniteScroll';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import About from './components/sections/About';
import Benefits from './components/sections/Benefits';
import Hero from './components/sections/Hero';
import Workflow from './components/sections/Workflow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfiniteScroll />
      <Workflow />
      <About />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
