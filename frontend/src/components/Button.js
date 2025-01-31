import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';



const CustomButton = ({ onPress, title, color }) => {
  return (
    <SafeAreaView style={styles.containerButtonComponent}>
      <TouchableOpacity
        style={[styles.buttonButtonComponent, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonTextButtonComponent}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomButton;