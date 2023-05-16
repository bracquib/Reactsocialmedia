import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function Newsfeed() {
  return (
    <SafeAreaView style={styles.wrapper}>

    <View style={styles.container}>
      <Text>Newsfeed</Text>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  }
});

