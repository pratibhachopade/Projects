import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='f-heading'>
        <h1>Features</h1>
        <p>Here are some features of software</p>

      </div>
      <Features/>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}

export default App;
