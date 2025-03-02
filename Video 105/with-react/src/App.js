import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Navbar logoText="CodewithHarry"/>
      <div className='value'>
        {value}
      </div>
      <button onClick={() => {setValue(value+1)}}>onClick</button>
      <Footer></Footer>
    </div>
  );
}

export default App;
