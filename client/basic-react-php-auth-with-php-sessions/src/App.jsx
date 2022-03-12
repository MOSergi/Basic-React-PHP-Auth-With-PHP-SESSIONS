import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SectionHome from './components/sectionHome';
import Register from './components/register';
import Login from './components/login';
import userContextLog from './context/userContext';
import { useState } from 'react';
import Profile from './components/profile';

function App() {

  const [loginStatus, setLoginStatus] = useState(false);


  return (
    <div className="App">
      <Router>
      <userContextLog.Provider value={{loginStatus, setLoginStatus}}>
        <Routes>
          <Route path='/' element={<><Header /> <SectionHome /></>}></Route>
          <Route path='/Login' element={<><Header /> <Login /></>}></Route>
          <Route path='/Register' element={<><Header /> <Register /></>}></Route>
          <Route path='/Profile' element={<><Header /> <Profile /> </>}></Route>
        </Routes>
        </userContextLog.Provider>
      </Router>
    </div>
  );
}

export default App;
