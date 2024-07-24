import React, { useContext, useEffect } from 'react'
import '../components/LoadingBar.css'
import { StoreContext } from '../store/StoreContext'

function LoadingBar() {
    const {width, setWidth} = useContext(StoreContext);
    useEffect(()=>{
        let barLoading = setInterval(()=>{
                {
                    width <= 99 ? setWidth((prev) => prev + 1 ) : clearInterval(barLoading)
                }
        }, 50)
        return ()=> clearInterval(barLoading);
    },[width])
    console.log(width);
  return (
    <div className='loderDiv'>
      <div className="outerDiv">

        <div className="innerDiv" style={{backgroundColor: width < 50 ? "#4B79A1" : "green", width:`${width}%`}}>
            <p style={{color : width < 50 ? "red" : "white", marginTop:"4px", fontWeight:"bold"}}>{width <= 99 ? width : "Completed"}</p>
        </div>

      </div>
    </div>
  )
}

export default LoadingBar
