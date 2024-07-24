import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../store/StoreContext'
import '../components/DataList.css'
import { FaDeleteLeft } from "react-icons/fa6";
function DataList() {
const {notesTitle, setNoteTitle} = useContext(StoreContext);

      const deletingEle = (index)=>{
        const dataToBeFiltered = notesTitle;
       const filteredData = dataToBeFiltered.filter((item,idx)=>{
          return idx!=index;
        })
        setNoteTitle(filteredData);
      }
      console.log(notesTitle)
  return (
    <div className='listItem'>
      <div className='list'>{
        
        notesTitle.map((item, index)=>{
            console.log(item, index);
          return <div key={index}>{item.title} <button onClick={()=>deletingEle(index)}><FaDeleteLeft /></button></div>
        })
        }</div>
    </div>
  )
}

export default DataList
