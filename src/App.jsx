import { useContext, useState } from 'react'
import './App.css'
import Section1 from './components/Section1'
import { StoreContext } from './store/StoreContext'
import Section2 from './components/Section2'
function App() {
   const {width} = useContext(StoreContext);

  return (
    <>
    {width <= 99 ? <Section1></Section1> : <Section2/>}
    
    </>
  )
}

export default App
