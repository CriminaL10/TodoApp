import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './TodoList.styles';

const TodoList = props => {
  return (
    <Pressable
      style={props.complete ? styles.completedTodo : styles.todoItems}
      onLongPress={props.handleLongPress}
      onPress={props.handlePress}>
      <Text style={styles.todoItemText}>{props.title}</Text>
    </Pressable>
  );
};

export default TodoList;
