import React from 'react';
import PropTypes from 'prop-types';
import Img04 from './index'
import data from './data'


export default {
  title: 'Img',
  component: Img04
};
const Template = (args) => <Img04 {...args} />;


export const ImgType04 = Template.bind({});
ImgType04.args = {
  ...data,
};