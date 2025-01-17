import VideoCache from './NativeVideoCache';

export function convert(url: string): string {
  return VideoCache.convert(url);
}

export function convertAsync(url: string): Promise<string> {
  return VideoCache.convertAsync(url);
}
