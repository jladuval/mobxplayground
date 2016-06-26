require('normalize.css/normalize.css');
require('styles/App.css');

import Example from '../containers/Example'

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Example foo="bar">
        </Example>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
