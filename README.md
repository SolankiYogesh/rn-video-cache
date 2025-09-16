# 🎥 react-native-video-cache-turbo

> 🚀 **Turbo-powered Video Caching for React Native**
> Seamless **online video playback with offline caching** using React Native’s modern **Turbo Modules**.

[![npm version](https://img.shields.io/npm/v/react-native-video-cache-turbo?color=blue&logo=npm)](https://www.npmjs.com/package/react-native-video-cache-turbo)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SolankiYogesh/rn-video-cache?style=social)](https://github.com/SolankiYogesh/rn-video-cache)

---

## ✨ Features

- ⚡ **Turbo Modules Support** → Modern RN architecture for performance
- 📱 **Cross-Platform** → Works on **iOS & Android**
- 🔒 **Automatic Caching** → Transparent offline playback
- 🎯 **Simple API** → Just `convert(url)` and you’re ready
- ⚙️ **Zero Configuration** → Works out of the box
- 🔄 **Async + Sync Support** → Use whichever suits your flow

---

## 📦 Installation

```bash
npm install react-native-video-cache-turbo
# or
yarn add react-native-video-cache-turbo
```

### iOS Setup

```bash
cd ios && pod install && cd ..
```

✅ Android setup is **automatic** — nothing extra required.

---

## 🚀 Quick Start

```tsx
import { convert, convertAsync } from 'react-native-video-cache-turbo';
import Video from 'react-native-video';

const videoUrl = 'https://example.com/video.mp4';

export default function VideoPlayer() {
  return (
    <Video source={{ uri: convert(videoUrl) }} controls style={{ flex: 1 }} />
  );
}
```

**Async Usage**:

```tsx
const cachedUrl = await convertAsync(videoUrl);
console.log('Cached URL:', cachedUrl);
```

---

## 📖 API Reference

### 🔹 `convert(url: string): string`

Synchronously converts a video URL to a cached/proxy URL.

```tsx
const cachedUrl = convert('https://example.com/video.mp4');
// → 'http://localhost:port/proxy/video.mp4'
```

---

### 🔹 `convertAsync(url: string): Promise<string>`

Asynchronously converts a video URL.

```tsx
const cachedUrl = await convertAsync('https://example.com/video.mp4');
```

---

## 🎯 Usage with `react-native-video`

```tsx
import { convert } from 'react-native-video-cache-turbo';
import Video from 'react-native-video';

export default function App() {
  const videoUrl =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  return (
    <Video
      source={{ uri: convert(videoUrl) }}
      controls
      resizeMode="contain"
      style={{ width: '100%', height: 300 }}
    />
  );
}
```

---

## 🔧 Advanced Usage

### Custom Player Integration

```tsx
import { convertAsync } from 'react-native-video-cache-turbo';

class CustomVideoPlayer {
  async loadVideo(url: string) {
    try {
      const cachedUrl = await convertAsync(url);
      this.player.src = cachedUrl;
    } catch {
      this.player.src = url; // fallback
    }
    this.player.play();
  }
}
```

### Error Handling

```tsx
try {
  const cachedUrl = convert(videoUrl);
} catch (e) {
  console.warn('Caching failed. Falling back to original URL.');
}
```

---

## 🏗️ Architecture

This library is built on **React Native Turbo Modules** 💨

- 🚀 **Performance** → Direct native calls, no bridge overhead
- 🔒 **Type Safety** → Full TypeScript support
- 🔗 **Automatic Linking** → No manual native setup

### Under the Hood

- **iOS** → [KTVHTTPCache](https://github.com/ChangbaDevs/KTVHTTPCache)
- **Android** → [AndroidVideoCache](https://github.com/danikula/AndroidVideoCache)

---

## 📊 Why Use This?

✔ Faster **first playback** <br>
✔ Reduced **bandwidth consumption**<br>
✔ **Offline playback** after first load<br>
✔ Smooth **seek support**

---

## 🐛 Troubleshooting

- ❌ **Video not playing?** → Ensure internet is available on first play
- ❌ **iOS build error?** → Run `pod install`
- ❌ **Caching not working?** → Validate your video URL

Debugging Example:

```tsx
const cachedUrl = convert('https://example.com/video.mp4');
console.log({ cachedUrl });
```

---

## 🤝 Contributing

We welcome PRs!

1. Fork this repo
2. `git checkout -b feature/my-feature`
3. Make changes & test on iOS/Android
4. Submit PR 🎉

📖 See [Contributing Guidelines](CONTRIBUTING.md) & [Code of Conduct](CODE_OF_CONDUCT.md)

---

## 📄 License

MIT © [Yogesh Solanki](https://github.com/SolankiYogesh)

---

## 🙏 Acknowledgments

- Original [`react-native-video-cache`](https://github.com) authors
- [KTVHTTPCache](https://github.com/ChangbaDevs/KTVHTTPCache) (iOS)
- [AndroidVideoCache](https://github.com/danikula/AndroidVideoCache) (Android)
- RN Community 💙

---

## 📞 Support

- 💬 [Open an Issue](https://github.com/SolankiYogesh/rn-video-cache/issues)
- 📚 Check [examples](example/)
- 🔍 Search closed issues before posting

---

✨ **Made with ❤️ for the React Native community** ✨
