import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const Layout = ({ ...rest }) => (
  <Grommet theme={grommet}>
    <Box width={{ min: '350px' }} height={{ min: '350px' }} {...rest} />
  </Grommet>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
