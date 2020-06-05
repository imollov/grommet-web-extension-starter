import React from 'react';
import browser from 'webextension-polyfill';
import { Box, Button, Text } from 'grommet';
import { Send } from 'grommet-icons';

const handleClick = () => browser.runtime.sendMessage({ popupMessage: 'hi' });

export default () => (
  <Box flex align="center" gap="large" pad="large">
    <Text>Powered by Grommet</Text>
    <Button
      label="Message Background"
      icon={<Send color="brand" />}
      onClick={handleClick}
    />
  </Box>
);
