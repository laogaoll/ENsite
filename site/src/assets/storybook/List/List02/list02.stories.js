import React from 'react';
import PropTypes from 'prop-types';
import List02 from './index'
import data from './data'


export default {
  title: 'List',
  component: List02
};

const Template02 = (args) => <List02 {...args} />;

export const ListType02 = Template02.bind({});
ListType02.args = {
  ...data,
};
