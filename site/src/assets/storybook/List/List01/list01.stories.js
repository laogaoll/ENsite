import React from 'react';
import PropTypes from 'prop-types';
import List01 from './index'
import data from './data'

export default {
  title: 'List',
  component: List01
};

const Template01 = (args) => {
  return <List01 {...args} />;
}

export const ListType01 = Template01.bind({});
ListType01.args = {
  ...data,
};