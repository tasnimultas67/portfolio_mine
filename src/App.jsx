
import { Outlet, ScrollRestoration} from 'react-router-dom'
import './App.css'
import Header from './Components/Common/Header/Header'
import Footer from './Components/Common/Footer/Footer'

function App() {

  return (
    <>
    <ScrollRestoration />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
