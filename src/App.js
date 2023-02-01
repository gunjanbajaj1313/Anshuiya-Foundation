import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Causes from './components/Causes/Causes';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Cards />
      <About />
      <Causes />
      
      
    </div>
  );
}

export default App;
