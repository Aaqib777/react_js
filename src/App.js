
import './App.css';
import Alert from './Component/Alert';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import TextForm from './Component/TextForm';

function App() {

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {

      setalert ({
        msg: message,
        type: type
      })
      
      setTimeout(() => {
        setalert(null)
      }, 1000);

  }

  // const [ctext, setctext] = useState('dark');

  const [Mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const toggleMode = () =>
  {
    if(Mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert('Dark Mode Enabled','success');
      document.title = 'TextUtils - Dark Mode';
      
      // setctext('light');
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light Mode Enabled','success');
      document.title = 'TextUtils - Light Mode';
      
      // setctext('dark');
    }
    
    
  }
  return (
    <>
    <Router>
      
      
      <Navbar title = "TextUtils" aboutText = "About US"  mode = {Mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert} />
    
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm showalert = {showalert} heading="Enter the text to analyze" mode = {Mode} title="Text" />} />      
      </Routes>
   
      </div>
     
    </Router> 
    </>
  );
}

export default App;
