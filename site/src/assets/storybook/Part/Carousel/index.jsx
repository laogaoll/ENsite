import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import { Carousel } from 'antd';
import './index.scss'
import data from './data';

const Caro =({background,color,data})=> {


  return (
    <div className="sc-carousel" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={data.line} />

      <div className="m-bd">
        <Carousel autoplay>
          {data?.list?.map((item,i)=>
            <div key={i}>
              <img src={item.img} />
            </div>
          )}
        </Carousel>
      </div>

    </div>
  )
}

Caro.propTypes = {
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
};

Caro.defaultProps = {
  background: '#fff',
  color: '#000',
  title: '标题',
  line: true,
  list: [{img:'http://www.baidu.com'}],
};


export default Caro
