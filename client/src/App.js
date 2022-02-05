import Header from './components/header';
import Hero from './components/hero';
import Section2 from './components/section2';
import Timeline from './components/timeline';
import Tokenomics from './components/tokenomics';
import Footer from './components/footer';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section2 />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
