import React from 'react';
import PropTypes from 'prop-types';
import List05 from './index'
import data from './data'


export default {
  title: 'List',
  component: List05
};
const Template = (args) => <List05 {...args} />;


export const ListType05 = Template.bind({});
ListType05.args = {
  ...data,
};