import React from 'react';
import List11 from './index'
import data from './data'


export default {
  title: 'List',
  component: List11
};
const Template = (args) => <List11 {...args} />;


export const ListType11 = Template.bind({});
ListType11.args = {
  ...data,
};