import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener(({ popupMessage }) => {
  if (popupMessage) {
    console.log(`Received message from popup: ${popupMessage}`);
  }
});

// Access environment variable example
// console.log(process.env.FOO);
