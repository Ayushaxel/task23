import './App.css'
import Footer from './components/Footer'
import {Outlet} from "react-router-dom"
import Header from './components/header'

function App() {


  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>

   </>
  )
}

export default App