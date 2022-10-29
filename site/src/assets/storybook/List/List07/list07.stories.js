import React from 'react';
import PropTypes from 'prop-types';
import List07 from './index'
import data from './data'


export default {
  title: 'List',
  component: List07
};
const Template = (args) => <List07 {...args} />;


export const ListType07 = Template.bind({});
ListType07.args = {
  ...data,
};