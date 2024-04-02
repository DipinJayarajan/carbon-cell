import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Screens/LandingPage';
import Assets from './Screens/Assets';
import Organization from './Screens/Organization';
import Trade from './Screens/Trade';
import History from './Screens/History';

function App() {
  return (
    <div className="">
     
      <Routes>
      <Route path='/' element= {<LandingPage />} />
      <Route path='/assets' element= {<Assets />} />
      <Route path='/organization' element= {<Organization />} />
      <Route path='/trade' element= {<Trade />} />
      <Route path='/history' element= {<History />} />
      </Routes>

    </div>
  );
}

export default App;
