import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
import data from './data';

const List06 =({background,color,title,line,btn,list})=> {

  return (
    <div className="sc-list06" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      <div className="m-bd">
        {data.list.map((item,i)=> 
          <div className="m-item" key={i}>
            <div className="m-tl">{item.name}</div>
            <div className="m-ossm">こんな方におすすめ</div>
            <div className="m-rec">
              {item.rec.map((o,j)=>
                <li key={j}>{o}</li>
              )}
            </div>
            <div className="m-desc">{item.desc}</div>
            <div className="m-ft">
              {item.list.map((o,j)=>
                <div className="m-list" key={j}>
                  <div className="m-row">
                    <label>{o.m}</label>
                    <em>{o.v}</em>
                  </div>
                  <div className="m-row">
                    <span>{o.d}</span>
                  </div>
                  <div className="m-row">
                    <span>{o.o}</span>
                  </div>
                </div>
              )}
              <div className="m-fn">
                <a>{data.btn}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


List06.propTypes = {
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

List06.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  btn:'xxx',
  list: []
};

export default List06
