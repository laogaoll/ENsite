import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
import data from './data';

const List11 =({color,background})=> {
  return (
    <div className="sc-list11" style={{background:`${background}`,color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      {data.list.map((item,i) =>
          <div className="m-item" key={i}>
            <div className="m-hd">
              <span>{item?.title}</span>
              <label className={data.round? "round":""}>{item?.label}</label>
            </div>
            <div><div></div><spans className={data.bottom? "bottom":""}>{item?.cnt}</spans></div>
          </div>
      )}
    </div>
  )
}

List11.propTypes = {
  background:PropTypes.string,
  color:PropTypes.string,
  title:PropTypes.string,
  list:PropTypes.array,
  line:PropTypes.bool,
  round:PropTypes.bool,
  bottom:PropTypes.bool,
};
List11.defaultProps = {
  background:'#fff',
  color:'#333',
  title:'标题',
  list:[],
  line:true,
  round:true,
  bottom:true,
}

export default List11