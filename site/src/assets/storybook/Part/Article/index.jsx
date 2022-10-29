import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';

import './index.scss'
import data from './data'

const Article =({background,color})=> {

  return (
    <div className="sc-article" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      <div className="m-bd">
        <div className="m-wrap">
          {data.list.map((item,i)=>
            <p>{item}</p>
          )}
        </div>
        
        {data.showImg &&
        <div className="m-img">
          <img src={data.img} />
        </div>}
      </div>
      {data.showBtn &&
      <div className="m-ft">
        <a className="btn01" href={data.btn.url}>{data.btn.name}</a>
      </div>}
    </div>
  )
}

Article.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array,
  /** 图片地址 */
  img: PropTypes.string,
  /** 按钮地址 */
  btn: PropTypes.object,
  /** 是否显示图片 */
  showImg: PropTypes.bool,
  /** 是否显示按钮 */
  showBtn: PropTypes.bool,
};

Article.defaultProps = {
  background: '#fff',
  color: '#000',
  title: '标题',
  line: true,
  list: ['内容'],
  img: '',
  btn: {name:'按钮',url:'#'},
  showImg: false,
  showBtn: false,
};

export default Article