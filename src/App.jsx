
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Common/Header/Header'
import Home from './Components/Pages/Home/Home'
import Footer from './Components/Common/Footer/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
