import React, {Component} from 'react';
import {asyncConnect} from 'redux-async-connect';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    return Promise.all(promises);
  }
}])
export default class Main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}