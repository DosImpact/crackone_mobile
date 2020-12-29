import * as React from "react";
import { WebView } from "react-native-webview";
import { StatusBar, SafeAreaView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="default" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <WebView
            source={{ uri: "https://www.crack1.kr/" }}
            // onNavigationStateChange={(e) => console.log(e)}
            // onMessage={(e) => console.log(e)}
            style={{ marginTop: 0 }}
          />
        </SafeAreaView>
      </>
    );
  }
}
