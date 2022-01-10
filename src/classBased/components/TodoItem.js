import React, { Component } from 'react';
import propTypes from 'prop-types';

import styles from './TodoItem.module.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const { editing } = this.state;
    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.5,
      textDecoration: 'line-through',
    };

    const {
      completed, id, title, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          ...
        </div>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <input
          type="text"
          value={title}
          style={editMode}
          className={styles.textInput}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  completed: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  handleChangeProps: propTypes.func.isRequired,
  deleteTodoProps: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,

};
