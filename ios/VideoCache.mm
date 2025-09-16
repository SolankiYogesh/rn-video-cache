// VideoCache.m
#import "VideoCache.h"
#import <KTVHTTPCache/KTVHTTPCache.h>

@implementation VideoCache
RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeVideoCacheSpecJSI>(params);
}

- (nonnull NSString *)convert:(nonnull NSString *)url { 
    if (!KTVHTTPCache.proxyIsRunning) {
        NSError *error;
        [KTVHTTPCache proxyStart:&error];
        if (error) {
            return url;
        }
    }

    NSURL *videoUrl = [NSURL URLWithString:url];
    @try {
        NSURL *completedCacheFileURL = [KTVHTTPCache cacheCompleteFileURLWithURL:videoUrl];
        if (completedCacheFileURL != nil) {
            return completedCacheFileURL.absoluteString;
        }
    }
    @catch (NSException *exception) {
    }

    return [KTVHTTPCache proxyURLWithOriginalURL:videoUrl].absoluteString;
}

- (void)convertAsync:(NSString *)url 
             resolve:(RCTPromiseResolveBlock)resolve 
              reject:(RCTPromiseRejectBlock)reject 
{
    if (!KTVHTTPCache.proxyIsRunning) {
        NSError *error;
        [KTVHTTPCache proxyStart:&error];
        if (error) {
            reject(@"init.error", @"failed to start proxy server", error);
            return;
        }
    }

    NSURL *videoUrl = [NSURL URLWithString:url];
    @try {
        NSURL *completedCacheFileURL = [KTVHTTPCache cacheCompleteFileURLWithURL:videoUrl];
        if (completedCacheFileURL != nil) {
            resolve(completedCacheFileURL.absoluteString);
            return;
        }
    }
    @catch (NSException *exception) {
    }

    resolve([KTVHTTPCache proxyURLWithOriginalURL:videoUrl].absoluteString);
}

@end
