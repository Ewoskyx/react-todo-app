import React, { Component } from 'react';
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    return (
      <>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={handleChangeProps}
              deleteTodoProps={deleteTodoProps}
              setUpdate={setUpdate}
            />
          ))}
        </ul>
      </>
    );
  }
}

TodosList.propTypes = {
  todos: propTypes.func.isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProps: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,
};
