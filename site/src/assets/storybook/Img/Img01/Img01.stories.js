import React from 'react';
import PropTypes from 'prop-types';
import Img01 from './index'
import data from './data'


export default {
  title: 'Img',
  component: Img01
};
const Template = (args) => <Img01 {...args} />;


export const ImgType01 = Template.bind({});
ImgType01.args = {
  ...data,
};