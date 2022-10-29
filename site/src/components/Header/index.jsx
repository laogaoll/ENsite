import React,{Component} from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import {getdata} from '../../api/api'
import './index.scss'

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.baidu.com">
            Chinese
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            English
          </a>
        ),
        key: '1',
      },
      {
        type: 'divider',
      }
    ]}
  />
);

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  async componentDidMount(){
    getdata().then((res)=>{
      console.log(res);
      this.setState({data:res.homePage.navigation})
      }).catch((err)=>{
          console.log(err);
      })
  }
  render(){
    return(
      <header>
        <div>
          <a href="/">EN</a>
          <nav className='m-nav'>
            <ul>
              {this.state.data?.map((item,i)=>
              <li key={i}>{item}</li>
              )}
            </ul>
          </nav>
          <Dropdown overlay={menu} className='u-lan'>
          <a onClick={(e) => e.preventDefault()}>
          <Space>
           Language
          <DownOutlined />
            </Space>
          </a>
          </Dropdown>
        </div>
      </header>
    )
  }
}

export default Header;