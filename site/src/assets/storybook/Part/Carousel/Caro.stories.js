import React from 'react';
import PropTypes from 'prop-types';
import Caro from './index'
import data from './data'

export default {
  title: 'Part',
  component: Caro
};

const Template02 = (args) => {
  return <Caro {...args} />;
}

export const CaroType = Template02.bind({});
CaroType.args = {
  ...data,
};