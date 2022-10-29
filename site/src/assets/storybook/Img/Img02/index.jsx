// import { Image, Tag, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
import Title from '../../Title';
import './index.scss';
import data from './data'


const Img02 = ({background,color }) => {


  return (
    <div className="sc-Img02" style={{background:`${background}`, color:`${color}`}}>
      <Title title={data.title} line={!data.line} />

      <div className="m-bd">
        {data.list.map((item, i) => 
            i<=2&&(<div className="m-item" key={i}>
              <div className="m-img">
                <img src={item.img} alt="" />
              </div>
              <div className='m-cnt'>

                {item?.title &&
                  <div className="m-cnt-g1">{item?.title}</div>
                }

                {item?.cnt &&
                  <p className="m-cnt-g2">{item?.cnt}</p>
                }

                <div className='m-btn'>
                  {item?.btn &&
                    data.btn &&
                    <a href={item?.link&&item?.link}><button >{item.btn}</button></a>
                  }
                </div>
              </div>
            </div>)
        )}
      </div>


    </div>
  )
}

Img02.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题文本 */
  title: PropTypes.string,
  /** 标题是否显示下划线 */
  line: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
  /** 是否显示按钮 */
  btn: PropTypes.bool
};

Img02.defaultProps = {
  background: '#fff',
  color:'#333',
  title: '标题',
  line: true,
  list: [],
  btn: true
};




export default Img02