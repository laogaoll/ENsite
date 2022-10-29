import React from 'react';
import './index.scss'

const A_title =({title,line,address})=> {

const hre =()=>{
    window.location.href="/Login";
}
  return (
    <div onClick={()=>hre()} className="sc-title1">
      { title && <span>{title}</span> }
    </div>
  )
}

export default A_title