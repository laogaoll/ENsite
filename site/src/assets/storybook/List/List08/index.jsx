import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import data from './data';
const List08 = ({ background,color}) => {
  return (
    <div className="sc-list08" style={{background:`${background}`, color:`${color}`}}>
      <div className="m-bd">
        {data.list.map((item, i) => (
          <div className="m-item" key={i}>
            <div className="m-top">
            {item?.title && <div className="title">{item?.title}</div>}
            </div>
            <div className={`m-bdy ${data.line ? 'm-line' : ''}`}>
              
              {item?.label && data.label&&  
                <label className="m-lb">{item?.label}</label>
              }
              {item?.list[0] && (
                <div className="m-cnt">
                  {item.list.map((o, j) => (
                    <span key={j}>
                      {data.id && <label>{j + 1}. </label>} {o} <br />
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



List08.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 标题是否显示线段 */
  label: PropTypes.bool,
  /** 按钮标题 */
  id: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List08.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line: true,
  label:true,
  id:true,
  list: []
};

export default List08;
