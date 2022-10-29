
## Img06

- title `string`: 标题文本
- list `array`: ITEM 对象
- bgColor `bgColor`：背景颜色
- line `boolean`: 标题栏目的显示模式
- color `string`：底色的主色调(支持以下选择)
  `blue` | `cyan` | `geekblue` | `gold` | `green`
  `grey` | `lime` | `magenta` | `orange` 
  `purple` | `red` | `volcano` | `yellow`

## ITEM
- label `string`：一级标签
- title `string`：二级标签
- cnt `string`：段落内容
- img `string`：图片链接



```tsx
import React, { useState, useEffect } from 'react';
import { Img06 } from 'japanCom';

const [line, setLine] = useState(true);

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
  title:"お知らせ",
  list:[{
    label: "2022.6.10",
    title: "銀座ベレアージュクリニックPCRセンターについて",
    cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。そんな身体の衰えに対し、体質改善や全身の若返りを行う究極のエイジングケアのことです。",
    img: 'https://mqcai.top/cdn/hpcom_article.jpg',
  },{
    label: "2022.6.10",
    title: "銀座ベレアージュクリニックPCRセンターについて",
    cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。そんな身体の衰えに対し、体質改善や全身の若返りを行う究極のエイジングケアのことです。",
    img: 'https://mqcai.top/cdn/hpcom_article.jpg',
  },],
  color1:"orange",
  line: line,
}

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
    </div>
    <Img06 data={data} />
  </div>
  )
```
