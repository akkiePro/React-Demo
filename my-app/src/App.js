import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <NavBar title="Text Converter" home="Home" about="About Us" />
      {/* <TextForm heading="Fill up form" /> */}
      <About />
    </>
  );
}

export default App;
