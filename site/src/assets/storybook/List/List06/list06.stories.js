import React from 'react';
import PropTypes from 'prop-types';
import List06 from './index'
import data from './data'


export default {
  title: 'List',
  component: List06
};
const Template = (args) => <List06 {...args} />;


export const ListType06 = Template.bind({});
ListType06.args = {
  ...data,
};