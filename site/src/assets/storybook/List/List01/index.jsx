import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import data from './data';
import './index.scss'

const List01 =({background,color})=> {

  return (
    <div className="sc-list01" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      <div className="m-bd">
        {data.list.map((item,i)=>
          <div className="m-item" key={i}>
            <div className="m-tl">
              {item?.title && 
              <label> 
              {data.id1 && <span>{i+1} .</span>} {item?.title} 
              </label>}
            </div>

            {item.cnt.map((o,j)=>
              <span key={j}>
                {data.id2 && <label>{j+1}. </label>} {o}
              </span>
            )}

            {item.list.map((o,j)=>
              <li className={data.id3?'':'np'} key={j}>
                <span>{o}</span>
              </li>
            )}
            
          </div>
        )}
      </div>

      
    </div>
  )
}

List01.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 一级标题序号 */
  id1: PropTypes.bool,
  /** 二级标题序号 */
  id2: PropTypes.bool,
  /** 三级标题序号 */
  id3: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List01.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  id1: true,
  id2: true,
  id3: true,
  list: []
};


export default List01
