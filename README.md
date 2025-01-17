# react-native-video-cache

Boost the performance of online video loading and caching in your React Native app by utilizing caching mechanisms for both iOS and Android platforms.

This package helps optimize video playback by caching video content locally, reducing loading times and improving performance, especially for repeated video views.

## Updates
- **New Arch Support**
- **Updated Native Libs**

## Platform Support

- **iOS**: Caching is handled via [KTVHTTPCache](https://github.com/SolankiYogesh/KTVHTTPCache) (forked and updated).
- **Android**: Caching is managed by [AndroidVideoCache](https://github.com/SolankiYogesh/AndroidVideoCache) (forked and updated).

## Installation

To get started with `react-native-video-cache`, follow these installation steps:

### 1. Install the package

Using **npm**:
```bash
npm install https://github.com/SolankiYogesh/react-native-video-cache
```

Using **yarn**:
```bash
yarn add react-native-video-cache@https://github.com/SolankiYogesh/react-native-video-cache
```

### 2. Install the required dependencies

For iOS, make sure to install CocoaPods if you're working on iOS:
```bash
cd ios && RCT_NEW_ARCH_ENABLED=1 pod install && cd ..
```

## Usage

To use `react-native-video-cache`, simply import the `convert` function and wrap your video source URL with it.

```javascript
import React from 'react';
import { Video } from 'react-native-video';  // Make sure you have react-native-video installed
import { convert } from 'react-native-video-cache';

const MyVideoPlayer = () => {
  const originalURL = 'https://path-to-your-video.mp4';

  return (
    <Video
      source={{ uri: convert(originalURL) }}  // Pass the converted URL to the Video component
      controls={true}
      resizeMode="contain"
    />
  );
};

export default MyVideoPlayer;
```

### How it works:
1. The `convert()` function takes the original video URL and returns a cached URL that can be used directly in the `Video` component.
2. When the video is played for the first time, it will be downloaded and cached. For subsequent plays, the cached video will be used, improving loading times.

## Example

Here's a simple example of using the `react-native-video-cache` package in a React Native component:

```javascript
import React from 'react';
import { Video } from 'react-native-video';
import { convert } from 'react-native-video-cache';

const VideoPlayer = () => {
  const videoUrl = 'https://path/to/video.mp4';

  return (
    <Video
      source={{ uri: convert(videoUrl) }}
      controls={true}
      resizeMode="cover"
    />
  );
};

export default VideoPlayer;
```
