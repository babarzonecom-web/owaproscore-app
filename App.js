import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState } from 'react';

// PWAのURL（GitHub Pages）
const APP_URL = 'https://babarzonecom-web.github.io/owaproscore/';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0a0f1e" />
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#4ade80" />
        </View>
      )}
      <WebView
        source={{ uri: APP_URL }}
        style={styles.webview}
        onLoadEnd={() => setLoading(false)}
        // iPhoneのセーフエリア対応
        contentInsetAdjustmentBehavior="automatic"
        // スクロールバー非表示
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // ズーム無効
        scalesPageToFit={false}
        // localStorage・Firebase使用のため
        domStorageEnabled={true}
        javaScriptEnabled={true}
        // キャッシュ設定
        cacheEnabled={true}
        // iOS向け設定
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        // Cookieを共有
        sharedCookiesEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f1e',
  },
  webview: {
    flex: 1,
    backgroundColor: '#0a0f1e',
  },
  loader: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0f1e',
    zIndex: 1,
  },
});
