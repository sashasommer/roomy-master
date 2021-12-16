//Android banner: ca-app-pub-8530734164234524/6210206664
//Android Intersitial: ca-app-pub-8530734164234524/5903084905

//IOS banner: ca-app-pub-8530734164234524/3975953232
//IOS Intersitial: ca-app-pub-8530734164234524/8073952673

import React from "react";
import { Platform, View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";
const BannerAd = () => {
  const adUnitID = Platform.select({
    ios: "ca-app-pub-3940256099942544/2934735716",
    android: "ca-app-pub-8530734164234524/6210206664",
  });

  return (
    <View style={{ position: "absolute", bottom: 90}}>
      <AdMobBanner
        adUnitID={adUnitID}
        bannerSize="banner"
        servePersonalizedAds={false}
      />
    </View>
  );
};

export default BannerAd;
