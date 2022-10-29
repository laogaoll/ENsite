## Img01

- line `boolean`: 标题栏目的显示模式
- id `boolean`: 是否显示序号
- title `string`: 标题文本
- list `array`: ITEM 对象

### ITEM

`cnt` 和 `list` 只有一个可以显示。

- img `string`: 图片链接
- title `string`: 一级标签
- label `string`: 二级标签
- cnt `string`: 段落内容
- list `array`: 内容数组

```tsx
import { Img01 } from 'japanCom';
import React, { useState } from 'react';

const [line, setLine] = useState(true);
const [id, setId] = useState(true);

const s = {
  padding: '10px 15px',
  border: '1px solid #eee',
  width: '120px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  transition: '.2 ease',
  flex: 1,
};

const data = {
  title: 'Img01',
  list: [
    {
      img: 'https://mqcai.top/cdn/hpcom_article.jpg',
      title: '2022.6.10',
      label: 'HZNU',
      cnt: '',
      list: [
        '銀座ベレアージュクリニックPCRセンターについて',
        'PCRセンター専用ホームページ',
        'を開設いたしました。料金やお問合せはホームページ内の連絡先にお願いします。',
        '美容点滴の問合せ先とは異なりますのでご了承下さい。',
      ],
    },
    {
      img: 'https://mqcai.top/cdn/hpcom_article.jpg',
      title: '2022.6.10',
      label: 'HZNU',
      cnt: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
      list: [],
    },
  ],
  line: line,
  id: id,
};

export default () => (
  <div>
    <div className="m-btn" style={{ display: 'flex' }}>
      <span style={s} onClick={setLine.bind(this, !line)}>
        LINE
      </span>
      <span style={s} onClick={setId.bind(this, !id)}>
        ID
      </span>
    </div>
    <Img01 data={data} />
  </div>
);
```
