
## List12

- des `string`: 卡片介绍
- titile `string`: 标题内容
- cnt_g1 `string`: 内容字段1
- cnt_g2 `string`: 内容字段2
- cnt_g3 `string`: 内容字段3
- line `boolean`: 标题栏目的显示模式
- hr `boolean`：分割线是否显示

```tsx
import React, { useState, useEffect } from 'react';
import { List12 } from 'japanCom';

const [line,setLine]  = useState(true);
const [hr,setHr]  = useState(true);

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
  des:"お知らせ",
  title:"サイトカイン相談窓口",
  cnt_g1:"06-6121-6103",
  cnt_g2:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。",
  cnt_g3:"受付時間 / 平日9:00 ~ 18:00",
  line:line,
  hr:hr,
}



export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
       <span style={s} onClick={setHr.bind(this,!hr)}>HR</span>
    </div>

    <List12 data={data} />
  </div>
  )
```
