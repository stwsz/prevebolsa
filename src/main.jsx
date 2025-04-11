import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'

import App from './App.jsx';
import ComoFunciona from './pages/ComoFunciona.jsx';
import PreverBolsa from './pages/PreverBolsa.jsx';
import Sobre from './pages/Sobre.jsx';
import Estatisticas from './pages/Estatisticas.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/como-funciona' element={<ComoFunciona />} />
        <Route path='/prever-bolsa' element={<PreverBolsa />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/estatisticas' element={<Estatisticas />} />
      </Routes>
    </Router>
  </StrictMode>
)
