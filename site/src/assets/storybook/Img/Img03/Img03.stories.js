import React from 'react';
import PropTypes from 'prop-types';
import Img03 from './index'
import data from './data'


export default {
  title: 'Img',
  component: Img03
};
const Template = (args) => <Img03 {...args} />;


export const ImgType03 = Template.bind({});
ImgType03.args = {
  ...data,
};