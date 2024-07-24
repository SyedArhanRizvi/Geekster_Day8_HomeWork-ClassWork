import React, { useContext } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { StoreContext } from '../store/StoreContext';
import '../components/AddBtn.css'
function AddBtn({onclick}) {
         
        // console.log(notesTitle);

  return (
    <div>
      <button onClick={onclick}>Notes <IoIosAddCircleOutline /></button>
    </div>
  )
}

export default AddBtn
