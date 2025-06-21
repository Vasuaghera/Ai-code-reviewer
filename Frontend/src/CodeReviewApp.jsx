import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReviewerPage from './pages/ReviewerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviewer" element={<ReviewerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
