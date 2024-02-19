import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SaveButton from './components/SaveButton';
import TodoList from './components/TodoList';
import styles from './App.styles';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const removeItem = item => {
    const todoList = [...todo];
    todoList.splice(item, 1);
    setTodo(todoList);
  };
  const completedTask = id => {
    const newTodo = todo.map(element => {
      if (element.id == id) {
        element.completed = true;
      }
      return element;
    });
    setTodo(newTodo);
    setCount(count - 1);
  };

  const saveTodo = () => {
    setTodo([...todo, {title: text, completed: false, id: id}]);
    setCount(count + 1);
    setId(id + 1);
    setText('');
  };
  useEffect(() => {
    console.log(todo);
  }, [todo]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Yapılacaklar</Text>
        </View>
        <Text style={styles.title}>{count}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={todo}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TodoList
              handleLongPress={removeItem}
              handlePress={() => {
                completedTask(item.id);
              }}
              title={item.title}
              complete={item.completed}
            />
          )}
        />
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          placeholder="Yapılacak.."
          onChangeText={setText}
          style={styles.saveText}
          value={text}
        />
        <View style={styles.saveButtonContainer}>
          <SaveButton text={text} todoSave={() => saveTodo()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
