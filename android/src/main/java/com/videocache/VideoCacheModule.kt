package com.videocache

import com.danikula.videocache.HttpProxyCacheServer
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = VideoCacheModule.NAME)
class VideoCacheModule(reactContext: ReactApplicationContext) :
  NativeVideoCacheSpec(reactContext) {
  private val context  = reactContext
  private var proxy: HttpProxyCacheServer? = null

  override fun getName(): String {
    return NAME
  }

  override fun convert(url: String?): String {
    if (this.proxy == null) {
      this.proxy = HttpProxyCacheServer(this.context);
    }
    return this.proxy!!.getProxyUrl(url);
  }

  override fun convertAsync(url: String?, promise: Promise?) {
    if (this.proxy == null) {
      this.proxy = HttpProxyCacheServer(this.context);
    }
    promise?.resolve(this.proxy!!.getProxyUrl(url));
  }

  companion object {
    const val NAME = "VideoCache"
  }
}
