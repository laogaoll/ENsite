import React from 'react';
import PropTypes from 'prop-types';
import List03 from './index'
import data from './data'


export default {
  title: 'List',
  component: List03
};

const Template03 = (args) => <List03 {...args} />;


export const ListType03 = Template03.bind({});
ListType03.args = {
  ...data,
};
