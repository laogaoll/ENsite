import React from 'react';
import PropTypes from 'prop-types';
import Article from './index'
import data from './data'

export default {
  title: 'Part',
  component: Article
};

const Template01 = (args) => {
  return <Article {...args} />;
}

export const ArticleType = Template01.bind({});
ArticleType.args = {
  ...data,
};