//import { presetPalettes} from '@ant-design/colors';
import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
import data from './data'

const Img06 =({background,color,title,list,color1,line})=> {
  //const colors=presetPalettes[color1];

  return (
    <div className="sc-img06" style={{background:`${background}`,color:`${color}`}}>
      <Title title={data.title} line={data.line} />
      {data.list.map((item,i)=>
        <div className="m-item" key={i} style={{background:`${data.color1}`}}>
          <div className="m-img"><img src={item?.img}/></div>
          <div>
            <label><span>{item?.label}</span></label>
            <div>{item?.title}</div>
            <div>{item?.cnt}</div>
          </div>
        </div>
      )}
    </div>
  )
}

Img06.propTypes = {
  background:PropTypes.string,
  color:PropTypes.string,
  title:PropTypes.string,
  list:PropTypes.array,
  color1:PropTypes.string,
  line:PropTypes.bool,
}

Img06.defaultProps = {
  background:"#fff",
  color:'#333',
  title:'标题',
  list:[],
  color1:"#aaa",
  line:true,
}

export default Img06