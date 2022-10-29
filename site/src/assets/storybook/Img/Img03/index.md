## Img03

- line `boolean`: 标题栏目的显示模式
- label `boolean`: 标签的显示模式
- change `boolean`: 左右变换
- list `array`: ITEM 对象

### ITEM

- img `string`: 图片链接
- title `string`: 标题
- label `string`: 标签
- cnt `string`: 段落内容
- change `boolean`: 左右顺序(false 为正序)

```tsx
import { Img03 } from 'japanCom';
import React, { useState } from 'react';
const [line, setLine] = useState(true);
const [change, setChange] = useState(true);
const [label, setLabel] = useState(true);

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
  title: 'Img03',
  list: [
    {
      img: 'https://mqcai.top/cdn/hpcom_article.jpg',
      title: 'title标题',
      label: 'label标签',
      cnt: '测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2',
      change: false,
    },
    {
      img: 'https://mqcai.top/cdn/hpcom_article.jpg',
      title: 'title标题',
      label: 'label标签',
      cnt: '测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2测试文字g2',
      change: true,
    },
  ],
  line: line,
  change: change,
  label: label,
};

export default () => (
  <div>
    <div className="m-btn" style={{ display: 'flex' }}>
      <span style={s} onClick={setLine.bind(this, !line)}>
        LINE
      </span>
      <span style={s} onClick={setChange.bind(this, !change)}>
        Change
      </span>
      <span style={s} onClick={setLabel.bind(this, !label)}>
        LABEL
      </span>
    </div>
    <Img03 data={data} />
  </div>
);
```
