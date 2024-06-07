import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/clocking.css'
import Clocking from './Pages/clocking'
import Timesheet from './Pages/Timesheet'
import Popup from './components/Popup'
import Leave from './Pages/leave'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element = {<Clocking/>}/>
      <Route path='/clocking' element ={<Clocking/>}/>
      <Route path='/popup' element ={<Popup/>}/>
      <Route path='/timesheet' element ={<Timesheet/>}/>
      <Route path='/leave' element ={<Leave/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
