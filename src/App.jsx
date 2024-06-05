import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/clocking.css'
import Clocking from './Pages/clocking'
import Popup from './components/Popup'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element = {<Clocking/>}/>
      <Route path='/clocking' element ={<Clocking/>}/>
      <Route path='/popup' element ={<Popup/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
