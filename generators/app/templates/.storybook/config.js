import { configure } from '@storybook/react';
import 'babel-polyfill';
import 'antd/dist/antd.css';
import '../src/styles/global-styles';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
