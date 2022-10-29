import React from 'react';
import PropTypes from 'prop-types';
import List10 from './index'
import data from './data'


export default {
  title: 'List',
  component: List10
};
const Template = (args) => <List10 {...args} />;


export const ListType10 = Template.bind({});
ListType10.args = {
  ...data,
};