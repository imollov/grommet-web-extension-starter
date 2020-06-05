import React from 'react';
import browser from 'webextension-polyfill';
import { Anchor, Footer } from 'grommet';

const handleClick = e => {
  e.preventDefault();
  browser.tabs.create({ active: true, url: e.target.href });
};

export default () => (
  <Footer background="brand" pad="medium">
    <Anchor
      label="Docs"
      href="https://v2.grommet.io/docs"
      onClick={handleClick}
    />
    <Anchor
      label="Components"
      href="https://v2.grommet.io/components"
      onClick={handleClick}
    />
    <Anchor
      label="Storybook"
      href="https://storybook.grommet.io"
      onClick={handleClick}
    />
  </Footer>
);
