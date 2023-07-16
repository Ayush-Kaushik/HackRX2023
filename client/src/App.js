import './App.css';
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patient from './components/Patient';

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/patient/:id" element={<Patient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
