
import { Route, Routes } from 'react-router-dom'
import Home from './components'
import Historia from './components/pages/Historia'
import Amenazas from './components/pages/Amenazas'
import Tecnologias from './components/pages/Tecnologias'

import Educacion from './components/pages/Educacion'

import Futuro from './components/pages/Futuro'
import Malware from './components/pages/Malware'
import Phishing from './components/pages/Phishing'
import AtaqueInySQL from './components/pages/AtaqueSQL'
import AtaqueDoS from './components/pages/AtaqueDoS'


function App() {
  return (
   <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/historia" element={<Historia/>} />
      <Route  path="/historia/futuro" element={<Futuro/>} />
      <Route  path="/amenazas" element={<Amenazas/>} />
      <Route  path="/amenazas/malware" element={<Malware/>} />
      <Route  path="/amenazas/phishing" element={<Phishing/>} />
      <Route  path="/amenazas/inyeccion-sql" element={<AtaqueInySQL/>} />
      <Route  path="/amenazas/dos" element={<AtaqueDoS/>} />


 <Route  path="/tecnologias" element={<Tecnologias/>} />
  <Route  path="/educacion" element={<Educacion/>} />
  
      
   </Routes>
  )
}

export default App
