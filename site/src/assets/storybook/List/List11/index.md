
## List11

- title `string`: 标题文本
- list `array`: ITEM 对象
- line `boolean`: 标题栏目的显示模式
- round `boolean`: label边框样式
- bottom `boolean`：内容字段下划线样式

### ITEM

- title `string`：一级标签
- label `string`：二级标签
- cnt `string`：段落内容

```tsx
import React, { useState, useEffect } from 'react';
import { List11 } from 'japanCom';

const [line, setLine] = useState(true)
const [round, setRound] = useState(true)
const [bottom, setBottom] = useState(true)


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
    title:"2019年06月04日",
    label:"商品情报",
    cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
  },{
    title:"2020年06月04日",
    label:"商品情报",
    cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
  },{
    title:"2021年06月04日",
    label:"商品情报",
    cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
  }],
  line:line,
  round:round,
  bottom:bottom,
}

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
      <span style={s} onClick={setRound.bind(this,!round)}>ROUND</span>
      <span style={s} onClick={setBottom.bind(this,!bottom)}>Bottom</span>
    </div>

    <List11 data={data} />
  </div>
  )
```
