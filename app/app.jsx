var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var MainApp = require('MainApp');


// app css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <MainApp/>,
  document.getElementById('app')
);
