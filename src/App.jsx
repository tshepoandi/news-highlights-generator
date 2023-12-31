
import './App.css'
import Navbar from './Components/Navbar'
import { NewsBoard } from './Components/NewsBoard'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import General from './Pages/General'
import Technology from './Pages/Tech'
import { Business } from './Pages/Business'
import Entertainment from './Pages/entertainment'
function App() {

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<NewsBoard/>} />
      <Route path='/general' element={<General/>}/>
      <Route path='/business' element={<Business/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path='/entertainment' element={<Entertainment/>}/> 
     </Routes>
    </BrowserRouter>
  )
}

export default App
