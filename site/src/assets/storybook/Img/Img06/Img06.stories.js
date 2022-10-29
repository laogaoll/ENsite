import React from 'react';
import Img06 from './index';
import data from './data';

export default {
    title:'Img',
    component:Img06
};
const Template = (args) => <Img06 {...args} />;

export const ImgType06  = Template.bind({});
ImgType06.args = {
    ...data,
};