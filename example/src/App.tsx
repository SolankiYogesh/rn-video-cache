import { Text, View, StyleSheet } from 'react-native';
import { convert } from 'react-native-video-cache';

export default function App() {
  const URL =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  return (
    <View style={styles.container}>
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
