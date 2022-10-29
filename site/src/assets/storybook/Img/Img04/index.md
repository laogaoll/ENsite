
## Img04

- title `string`: 标题文本
- cnt `string`: 段落内容
- img `string`：图片链接
- line `boolean`: 标题栏目的显示模式

```tsx
import React, { useState, useEffect } from 'react';
import { Img04 } from 'japanCom';

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
  title:"サイトカイン点滴",
  cnt:"加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。そんな身体の衰えに対し、体質改善や全身の若返りを行う究極のエイジングケアのことです。最新医療技術を駆使した幹細胞培養培養治療をおこなうことで、肌の悩みや身体の悩みを細胞レベルで改善していきます。当クリニックでは「脂肪由来 幹細胞培養液」「歯髄 幹細胞培養液」の2種類を導入・ご提供しております。",
  img: 'https://mqcai.top/cdn/hpcom_article.jpg',
  line: line,
}

export default () => (
  <div>
    <div className="m-btn" style={{"display": "flex"}}>
      <span style={s} onClick={setLine.bind(this,!line)}>LINE</span>
    </div>
    <Img04 data={data} />
  </div>
  )
```
