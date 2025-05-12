import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './Pages/HomePage.jsx'
import PostPage from './Pages/PostPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App