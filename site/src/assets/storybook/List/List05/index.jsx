import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
import data from './data';
import icon_ossm from '../../public/img/ossm.svg'

const List05 =({background,color})=> {

  return (
    <div className="sc-list05" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      <div className="m-bd">
        {data.list.map((item,i)=>
          <div className={(item.ossm)?"m-item ossm":"m-item"} key={i}>

            {item.ossm && 
            <div className="m-icon">
              <img src={icon_ossm} />
            </div>}
            
            <label className="icon">{item.title}</label>
            <span>{item.cnt}</span>
            <p>
              <a>{data.btn}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


List05.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 按钮标题 */
  btn: PropTypes.string,
  /** 数据内容 */
  list: PropTypes.array, 
};

List05.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: []
};

export default List05

