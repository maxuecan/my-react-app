import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '@/views/home';
import Plugins from '@/views/plugins';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link style={{ margin: '0 10px' }} to="/">首页</Link>
        <Link style={{ margin: '0 10px' }} to="/plugins">插件</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plugins" element={<Plugins />} />
      </Routes>
    </Router>
  )
}

export default App
