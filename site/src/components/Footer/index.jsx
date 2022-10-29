import React,{Component} from 'react';
import './index.scss'

class  Footer extends React.Component{

  render(){
    return (
      <>
        <footer>
          <div className="footer">
                <div className='f-text'>
                  <div>EN</div>
                  <div className='m-rela'>
                    <li>联系人：栗城园</li>
                    <li>联系电话：0081-8058975168</li>
                    <li>邮箱：yien_consult@126.com</li>
                  </div>
                </div>
                <div className='f-img'>
                  <div>
                    <img src="http://www.yienconsulting.com/Images/wozaidongjing2.jpg" alt="" />
                    <span>扫码加微信</span>
                  </div>
                  <div>
                    <img src="http://www.yienconsulting.com/Images/yien_consult.jpg" alt="" />
                    <span>扫码关注微信公众平台</span>
                  </div>
                </div>
          </div>
        </footer>
      </>
    )
  }
 
}

export default Footer;