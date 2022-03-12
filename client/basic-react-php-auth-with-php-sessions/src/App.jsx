import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Header /></>}></Route>
          <Route path='/Login' element={<><Header /></>}></Route>
          <Route path='/Register' element={<><Header /></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
