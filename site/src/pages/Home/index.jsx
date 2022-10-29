import React,{Component} from 'react';
import {getdata} from '../../api/api'
import  Carousel  from '../../assets/storybook/Part/Carousel';
import Img04 from '../../assets/storybook/Img/Img04';
import Img03 from '../../assets/storybook/Img/Img03';
import List03 from '@/assets/storybook/List/List03';
import Img01 from '@/assets/storybook/Img/Img01';
import './index.scss'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[],data2:[],data3:[]};
      }
      async componentDidMount(){
        getdata().then((res)=>{
          console.log(res);
          this.setState({data:res.homePage.Carousel})
          this.setState({data2:res.homePage.PMB})
          this.setState({data3:res.homePage.Parterns})
          console.log(res.homePage.Parterns);
          }).catch((err)=>{
              console.log(err);
          })
      }
    render(){
        return(
            <div className='g-index'>
                  <Carousel data={this.state.data}></Carousel>
                  <div className='home'>
                  <div className='m-hd'>
                     <h1>热门特色</h1>
                     <div className='tab'>
                       <a href="">体检项目</a>
                       <span>|</span>
                       <a href="">医疗项目</a>
                       <span>|</span>
                       <a href="">医疗美容</a>
                     </div>
                  </div>
                  <Img03 data={this.state.data2}></Img03>
                  <div className='u-title'>
                   <h1>合作伙伴一览</h1>
                  </div>
                  <Img01 data={this.state.data3}></Img01>
                  </div>
            </div>
        )
    }
}
export default Home

