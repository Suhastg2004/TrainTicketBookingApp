import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AvailableTrainsPage from './pages/AvailableTrainsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/available-trains" element={<AvailableTrainsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
