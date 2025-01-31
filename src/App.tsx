import './App.css'
import ArtworkDetails from './components/AtrworkDetails';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artwork/:id' element={<ArtworkDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
