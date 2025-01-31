import './App.css'
import ArtworkDetails from './components/AtrworkDetails';
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artwork/:id' element={<ArtworkDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
