import { convert } from '@sy/rn-video-cache';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';
export default function App() {
  const URL =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  return (
    <Video
      source={{
        uri: convert(URL),
      }}
      controls
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
