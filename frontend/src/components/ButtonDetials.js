import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const CustomButtonDetails = ({ onPress, title, color }) => {
  return (
    <SafeAreaView style={styles.buttonPropStyles}>
      <TouchableOpacity
        style={[styles.buttonPropButtonComponent, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonTextButtonComponent}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomButtonDetails;