import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
import Title from '../../Title';
import './index.scss'
import data from './data';

const Img05 =({background,color})=> {
  return (
    <div className="sc-img05" style={{background:`${background}`,color:`${color}`}}>
      <Title title={data.title} line={data.line} />
     {data.img1 &&
        <div className="m-img">
          <img src={data.img1} />
          <div></div>
        </div>}

      {data.img2 &&
        <div className="m-img">
          <div></div>
          <img src={data.img2} />
        </div>}
        
      <div>
        {data.label &&
          <label className={data.bg? "bg":""}> {data.label}</label>
        }</div>
      <div className='m-cnt'>{data.cnt}</div>
    </div>
  )
}

Img05.propTypes = {
  background:PropTypes.string,
  color:PropTypes.string,
  title:PropTypes.string,
  label:PropTypes.string,
  cnt:PropTypes.string,
  img1:PropTypes.string,
  img2:PropTypes.string,
  line:PropTypes.bool,
  bg:PropTypes.bool,
};

Img05.defaultProps = {
  background:'#fff',
  color:'#333',
  title:'标题',
  line: true,
  bg:true,
}

export default Img05