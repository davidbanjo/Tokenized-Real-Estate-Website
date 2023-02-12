import './App.css';
import InfiniteScroll from './components/InfiniteScroll';
import Navbar from './components/header/Navbar';
import Hero from './components/sections/Hero';
import Workflow from './components/sections/Workflow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfiniteScroll />
      <Workflow />
    </div>
  );
}

export default App;
