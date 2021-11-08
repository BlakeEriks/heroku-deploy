import './App.css';
import LogBook from './components/LogBook';
import {Routes, Route, Navigate} from 'react-router-dom'
import TabNav from './components/TabNav';
import Navbar from './components/Navbar';
import Trends from './components/Trends';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <TabNav />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/logbook" element={<LogBook />}/>
        <Route path="/trends" element={<Trends />}/>
      </Routes>
    </>
  )
}

export default App;