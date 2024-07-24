import React, { useContext } from 'react'
import '../components/NotesChacker.css'
import { MdNoteAdd } from "react-icons/md";
import { StoreContext } from '../store/StoreContext';
function NotesChacker() {
        const {notesAvail, setNotesAval} = useContext(StoreContext);
        console.log(notesAvail);
  return (
    <div className='isNotestAvai'>
        <div>
      <h1 className='stH1'><span>There</span> is no notes available !!</h1>
      <button className='btn' onClick={
        (()=> setNotesAval(true))}><MdNoteAdd /></button>
      <h1 className='s2h1'>Create New <span>Notes..</span></h1>
      </div>
    </div>
  )
}

export default NotesChacker
