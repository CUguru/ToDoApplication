var React = require('react');
var ToDoList = require('ToDoList');

var MainApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Do the dishes'
        }, {
          id: 3,
          text: 'Call mother'
        }, {
          id: 4,
          text: 'Iron pills take'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;

    return(
      <div>
        <ToDoList todos={todos}/>
      </div>
    );
  }
});
module.exports = MainApp;
