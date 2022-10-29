## Img02
- line `boolean`: 标题栏目的显示模式
- btn `boolean`: 是否显示按钮
- title `string`: 标题文本
- list `array`: ITEM 对象
- list 中的 ITEM 对象最多三个

### ITEM
- img `string`: 图片链接
- title `string`: 标题
- cnt `string`: 段落内容
- btn `string`: 按钮文本 
- link `string`: 按钮跳转链接
```tsx


import React, { useState, useEffect } from 'react';
import { Img02 } from 'japanCom';
const [line, setLine] = useState(true)
const [btn, setBtn] = useState(true)


const s = {
  padding: '10px 15px',
  border: '1px solid #eee',
  width: '120px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  transition: '.2 ease',
  flex: 1, 
}

const data = {
  title:"Img02",
  list:[{
    img: "https://mqcai.top/cdn/hpcom_article.jpg",
    title:"测试试文字g1",
    cnt:"测试文字g2测试",
    btn: "跳转",
    link:"https://www.baidu.com",
    },{
    img: "https://mqcai.top/cdn/hpcom_article.jpg",
    title:"测试文字g1测试文字g1测试文字g1",
    cnt:"测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2",
    btn: "跳转",
    link:"https://www.baidu.com",
    },{
    img: "https://mqcai.top/cdn/hpcom_article.jpg",
    title:"测试文字g1测试文字g1测试文字g1",
    cnt:"测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2",
    btn: "跳转",
    link:"https://www.baidu.com",
    }],
  line:  line,
  btn:btn
}

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
      <span style={s} onClick={setBtn.bind(this,!btn)}>BTN</span>
    </div>
    <Img02 data={data} />
  </div>
  )
```
