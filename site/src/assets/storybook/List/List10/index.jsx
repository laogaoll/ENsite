import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
import Title from '../../Title';
import './index.scss'
import data from './data';

const List10 =({background,color})=> {


  return (
    <div className="sc-list10" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

       <div className="m-bd">
        {data.list.map((item,i)=>
          <div className="m-item" key={i}>

            <div className="m-icon">
              <img src={item?.icon} />
            </div>

            <div className="m-cnt">
                {item?.title.map((o,j)=>
                  <span key={j} className="m-title">{o}</span>
                )}
                {item?.cnt && <div>{item?.cnt}</div>}
                {data.link? 
                  <label>
                    {item?.src && 
                      <a href={item?.src} className={data.lbLine? "m-label":""}>{item?.link}</a>}
                  </label> : ""}
            </div>
          </div>
        )}
      </div> 
    </div>
  )
}


List10.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  link: PropTypes.string,
  /** 标题是否显示线段 */
  label: PropTypes.bool,
  /** 标题是否显示线段 */
  lbLine: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List10.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  link: 'xxx',
  label:true,
  lbLine: true,
  list: []
};

export default List10