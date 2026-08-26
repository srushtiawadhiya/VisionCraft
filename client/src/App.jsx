import React, { useContext } from 'react';
import Result from './Pages/Result';
import BuyCredit from './Pages/BuyCredit'
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { AppContext } from './Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50
    to-orange-50'>
       {/* p = paddidng, x = left + right,4 = 1rem = 16px , sm = Small Screen(640px and above),
       md = medium(768px and above), lg = large (1024px and above) , gradient = Color gradually changes. */}
       <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin  && <Login/> }
       <Routes>
        <Route path='/' element = {<Home/>}/>
         <Route path='/Result' element = {<Result/>}/>
          <Route path='/BuyCredit' element = {<BuyCredit/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
