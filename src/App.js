import './App.scss';
import NavBar from './NavBar';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} />
      </Routes>
    </>
  );
}

export default App;
