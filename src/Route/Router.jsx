import App from '../App'
import Home from '../components/Home'
import Login from "../components/Login"
import Signup from '../components/Signup'
import Dashboard from '../components/Dashboard'
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

const Router=  createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route  path='' element={<Home/>}/>
            <Route  path='signup' element={<Signup/>}/>
            <Route  path='login' element={<Login/>}/>
            <Route  path='dashboard' element={<Dashboard/>}/>
        </Route>
    )
)

export default Router