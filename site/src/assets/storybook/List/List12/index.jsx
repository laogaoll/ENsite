import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
import data from './data'

const List12 =({color,background})=> {
  return (
    <div className="sc-list12" style={{background:`${background}`,color:`${color}`}}>
      <Title title={data.des} line={data.line} />
      <div className='m-item'>
        <div className='m-title'>{data.title}</div>
        <div className='m-cnt-g1'>{data.cnt_g1}</div>
        <div className='m-cnt-g2'>{data.cnt_g2}</div>
        <div className={data.hr? "hr":""}></div>
        <div className='m-cnt-g3'>{data.cnt_g3}</div>
      </div>
    </div>
  )
}

List12.propTypes = {
  background:PropTypes.string,
  color:PropTypes.string,
  title:PropTypes.string,
  des:PropTypes.string,
  cnt_g1:PropTypes.string,
  cnt_g2:PropTypes.string,
  cnt_g3:PropTypes.string,
  line:PropTypes.bool,
  hr:PropTypes.bool
}

List12.defaultProps = {
  background:'#fff',
  color:'#333',
  title:'标题',
  line:true,
  hr:true,
}

export default List12