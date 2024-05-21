import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#002b69'
      showAlert('Dark mode enabled.', 'success')
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode disabled.', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <NavBar/> */}
      <NavBar title="Text Converter" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Fill up form" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
