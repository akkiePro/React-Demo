import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <NavBar title="MyApp" home="Home" about="About Us" />
    </>
  );
}

export default App;
