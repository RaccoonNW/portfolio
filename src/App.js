import './App.css';
import NavBar from './NavBar';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <div className='component-container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
