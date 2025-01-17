import { Text, View, StyleSheet } from 'react-native';
import { multiply, convert } from 'react-native-video-cache';

const result = multiply(3, 7);

export default function App() {
  const URL =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Result: {convert(URL)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
