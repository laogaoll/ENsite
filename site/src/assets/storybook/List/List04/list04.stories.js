import React from 'react';
import PropTypes from 'prop-types';
import List04 from './index'
import data from './data'


export default {
  title: 'List',
  component: List04
};
const Template04 = (args) => <List04 {...args} />;


export const ListType04 = Template04.bind({});
ListType04.args = {
  ...data,
};