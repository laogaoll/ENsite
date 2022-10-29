import React from 'react';
import PropTypes from 'prop-types';
import List08 from './index'
import data from './data'


export default {
  title: 'List',
  component: List08
};
const Template = (args) => <List08 {...args} />;


export const ListType08 = Template.bind({});
ListType08.args = {
  ...data,
};