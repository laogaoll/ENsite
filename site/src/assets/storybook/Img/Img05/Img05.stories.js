import React from 'react';
import PropTypes from 'prop-types';
import Img05 from './index'
import data from './data'


export default {
  title: 'Img',
  component: Img05
};
const Template = (args) => <Img05 {...args} />;


export const ImgType05 = Template.bind({});
ImgType05.args = {
  ...data,
};