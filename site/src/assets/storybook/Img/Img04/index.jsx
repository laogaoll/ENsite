import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型

import './index.scss'
import data from './data'

const Img04 =({background,color, title,cnt,img,line})=> {
  return (
    <div className="sc-img04" style={{background:`${background}`, color:`${color}`}}>
      <div className="m-img">
            <img src={data.img} />
      </div>
      <div className="m-bd">
          <div className={data.line? "m-title line":"m-title"}>
            <span>{data.title}</span></div>
          <div className='m-cnt'>{data.cnt}</div>
      </div>
    </div>
  )
}

Img04.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题文本 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
  /** 段落内容 */
  cnt: PropTypes.string,
  /** 图片链接 */
  img: PropTypes.string
};

Img04.defaultProps = {
  background: '#fff',
  color:'#333',
  title: '标题',
  line: true,
  list: [],
  cnt:'段落内容',
  img:""
};



export default Img04