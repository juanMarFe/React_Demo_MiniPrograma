/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name} from './app.json';
import {Router, Route, TabRouter} from '@areslabs/router';

class HelloWorld extends React.Component {
  render() {
    // Route指定对应的key和组件
    return (
      <Router>
        <TabRouter text="F">
          <Route key="A" component={App} />
          <Route key="B" component={App} />
          <Route key="D" component={App} />
        </TabRouter>
      </Router>
    );
  }
}
AppRegistry.registerComponent(name, () => HelloWorld);
