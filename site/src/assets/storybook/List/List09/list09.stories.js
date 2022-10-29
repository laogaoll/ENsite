import React from 'react';
import PropTypes from 'prop-types';
import List09 from './index'
import data from './data'


export default {
  title: 'List',
  component: List09
};
const Template = (args) => <List09 {...args} />;


export const ListType09 = Template.bind({});
ListType09.args = {
  ...data,
};