import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Main from './pages/Main/Main';

function App() {

  return (
    <Router>
        <Routes>
            <>
              <Route path="/" element={<Main />} />
              {/* <Route path="/:id" element={<MainDetail />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
        </Routes>
      </Router>
  )
}

export default App
