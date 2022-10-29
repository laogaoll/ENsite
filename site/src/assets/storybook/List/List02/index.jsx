import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
import data from './data';
const List02 =({background,color})=> {

  const cls = `m-item ${(data.dash)?'dash':''} ${(data.icon)?'icon':''}`

  return (
    <div className="sc-list02" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      <div className="m-bd">
        {data.list.map((item,i)=>
          <div className={cls} key={i}>
            {item}
          </div>
        )}
      </div>
    </div>
  )
}


List02.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 是否显示图标 */
  icon: PropTypes.bool,
  /** 是否显示虚线 */
  dash: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List02.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: []
};

export default List02

