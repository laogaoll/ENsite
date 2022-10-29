import React from 'react';
import PropTypes from 'prop-types';
import Img02 from './index'
import data from './data'


export default {
  title: 'Img',
  component: Img02
};
const Template = (args) => <Img02 {...args} />;


export const ImgType02 = Template.bind({});
ImgType02.args = {
  ...data,
};