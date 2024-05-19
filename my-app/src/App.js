import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light')

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#002b69'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <NavBar/> */}
      <NavBar title="Text Converter" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Fill up form" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
