import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
