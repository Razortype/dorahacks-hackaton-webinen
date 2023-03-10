import { useState, useEffect, createContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import SideBar from './components/sidebar/SideBar'
import Main from './pages/main/Main'
import Welcome from './pages/testpage/TestPage'
import Inventory from './pages/inventory/Inventory'
import { Button } from 'react-bootstrap'
import useConnectionStore from './store/connection-store/useConnectionStore'
import ConnectPopup from "./components/connectPopup";
import TicketIssuer from './pages/ticketIssuer/TicketIssuerPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EnvContext = createContext({
  isSandbox: false,
  isTestnet: false,
});

function App() {
  const { connectOnLoad, address } = useConnectionStore();
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.innerWidth < 576 && setShow(false);
  }, []);
  useEffect(() => {
    connectOnLoad();
  }, []);

  return (

    <div className="App">
      <EnvContext.Provider
        value={{
          isSandbox: window.location.search.includes("sandbox"),
          isTestnet: window.location.search.includes("testnet"),
        }}>
        <SideBar show={show} setShow={setShow} />

        <div className='overflow-auto w-100 text-white'>

          <Button className={`${window.innerWidth > 576 ? 'd-none' : 'd-block'} scroll__sidemenu__button`} onClick={() => setShow(true)}>≡</Button>

          <Routes>

            <Route path='/' element={<Main />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/memory' element={<div>TEST</div>} />
            <Route path='/test' element={<Welcome />} />
            <Route path='/ticket-issuer' element={<TicketIssuer />} />

          <Route path='/' element={ <Main /> } />
          <Route path='/inventory' element={ <Inventory /> } />
          <Route path='/how-it-works' element={ <div>How It Works</div> } />
          <Route path='/about' element={ <div>About</div> } />
          <Route path='/contact' element={ <div>Contact</div> } />
          <Route path='/test' element={ <Welcome /> } />
          <Route path='/ticket-issuer' element={ <TicketIssuer /> } />
          </Routes>
        </div>
      </EnvContext.Provider>

      <ConnectPopup />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
