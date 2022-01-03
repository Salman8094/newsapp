// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <>
      
      <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<News key="general" country="in" category="general"/>}/>
              <Route exact path="/business" element={<News key="business" country="in" category="business"/>}/>
              <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>}/>
              <Route exact path="/health" element={<News country="in" key="health" category="health"/>}/>
              <Route exact path="/science" element={<News country="in" key="science" category="science"/>}/>
              <Route exact path="/sports" element={<News country="in" key="sports" category="sports"/>}/>
              <Route exact path="/technology" element={<News country="in" key="technology" category="technology"/>}/>
          </Routes>
      </Router>
      
    </>
    
  );
}

export default App;
