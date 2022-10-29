import React from 'react';
import './index.scss'

const Title =({title, line})=> {


  return (
    <div className={ line?"sc-title line":"sc-title"}>
      { title && <span>{title}</span> }
    </div>
  )
}

export default Title