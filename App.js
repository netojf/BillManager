// web 357266536439-ukhs622erk208n3us1gqr3t8otau0bmi.apps.googleusercontent.com
// ios 357266536439-0i167lqpi457egr9atepa7v4830trgk3.apps.googleusercontent.com

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
