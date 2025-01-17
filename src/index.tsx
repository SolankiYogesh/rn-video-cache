import VideoCache from './NativeVideoCache';

export function multiply(a: number, b: number): number {
  return VideoCache.multiply(a, b);
}

export function convert(url: string): string {
  return VideoCache.convert(url);
}

export function convertAsync(url: string): Promise<string> {
  return VideoCache.convertAsync(url);
}
