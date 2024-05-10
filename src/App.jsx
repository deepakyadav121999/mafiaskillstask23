
import './App.css'
import { BrowserRouter,Route ,Routes } from 'react-router-dom'
import  {Login}  from './Login'
import { Signup } from './Signup'
import { Home } from './Home'
import {Logo} from './Logo'
import { Header } from './Header'
function App() {


  return (
    <BrowserRouter>
      <Header/>
     
        <div className="conatiner">
        <Routes>
         <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Logo/>}/>
        </Routes>
        </div>
      
     
    </BrowserRouter>
  )
}

export default App
