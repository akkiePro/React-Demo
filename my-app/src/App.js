import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <NavBar title="MyApp" home="Home" about="About Us" />
      <TextForm heading="Fill up form" />
    </>
  );
}

export default App;
