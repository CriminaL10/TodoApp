import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './SaveButton.styles';

const SaveButton = props => {
  return (
    <Pressable
      onPress={props.todoSave}
      style={props.text ? styles.enabled : styles.disabled}
      disabled={props.text ? false : true}>
      {({pressed}) => (
        <Text style={styles.saveButton}>
          {pressed ? 'Kaydedildi!' : 'Kaydet'}
        </Text>
      )}
    </Pressable>
  );
};

export default SaveButton;
