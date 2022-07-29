import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hola!</Text>
        <Text>Android</Text>
        <StatusBar style="auto" />
        <LoginForm/>
      </View>
    </NavigationContainer>
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
