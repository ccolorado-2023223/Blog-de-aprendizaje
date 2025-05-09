import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage'; 
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main> 
      </div>
    </Router>
  );
}

export default App