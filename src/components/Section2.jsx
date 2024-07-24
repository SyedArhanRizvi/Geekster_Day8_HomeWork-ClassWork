import React, { useEffect, useRef, useState, useContext } from 'react'
import '../components/Section2.css'
import NotesChacker from '../components/NotesChacker';
import { StoreContext } from '../store/StoreContext';
import InputSection from './InputSection';
import { CgHello } from "react-icons/cg";


function Section2() {
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const {notesAvail, setNotesAval} = useContext(StoreContext);
    useEffect(()=>{
        setName(prompt("Enter first your Name here :"));
        setLastName(prompt("Enter last your Name here :"));
    },[])

    

  return (
    <section className='s2'>
      <div className="nav"><span>Hello</span> {name} {lastName} <CgHello /></div>
           {
            notesAvail === false ? <NotesChacker></NotesChacker> : <InputSection/>
           } 
      
    </section>
  )
}

export default Section2
