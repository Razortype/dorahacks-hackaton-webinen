import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import SideBar from './components/sidebar/SideBar'
import Main from './pages/main/Main'
import Welcome from './pages/testpage/TestPage'
import Inventory from './pages/inventory/Inventory'
import { Button } from 'react-bootstrap'

function App() {

    const [show,setShow] = useState(true);

    useEffect(() => {
        window.innerWidth < 576 && setShow(false);
    },[]);

  return (
    <div className="App">

      <SideBar show={show} setShow={setShow}/>

      <div className='overflow-auto w-100 text-white'>

        <Button className={`${window.innerWidth>576 ? 'd-none' : 'd-block'} scroll__sidemenu__button`} onClick={() => setShow(true)}>≡</Button>

        <Routes>

          <Route path='/' element={ <Main /> } />
          <Route path='/inventory' element={ <Inventory /> } />
          <Route path='/memory' element={ <div>TEST</div> } />
          <Route path='/test' element={ <Welcome /> } />

        </Routes>
      </div>
    
    </div>
  )
}

export default App
