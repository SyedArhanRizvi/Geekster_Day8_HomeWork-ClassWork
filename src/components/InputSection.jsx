import React, { useContext, useEffect, useState } from 'react'
import '../components/InputSection.css'
import AddBtn from './AddBtn';
import DataList from './DataList';
import { StoreContext } from '../store/StoreContext';
import MDEditor from '@uiw/react-md-editor';
function InputSection() {
  const [val,setVal] = useState("");
  const {notesTitle, setNoteTitle} = useContext(StoreContext);
  const [newData, setNewData] = useState();

        let titleName = ()=>{
          let data = {
            title : prompt("Enter Your TItle here.."),
            data1 : "",
          }
            setNoteTitle([...notesTitle, data]);
            
        }
     let setData =(e)=>{
        console.log(e.target.value)
        setNewData(e.target.value);
     }
  
  return (
    <section className='InputSection'>
      <div className="sideBar">
        <AddBtn onclick={titleName}></AddBtn>
        <DataList></DataList>
      </div>
      <div className="mainBar">
      <MDEditor className='markdown'
        value={newData}
        onChange={setData}
      />
      </div>
    </section>
  )
}

export default InputSection
