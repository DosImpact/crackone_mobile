import * as React from "react";
import { BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar, SafeAreaView } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    this.WEBVIEW_REF.current.goBack();
    return true;
  };

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

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
            mixedContentMode="always"
            ref={this.WEBVIEW_REF}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          />
        </SafeAreaView>
      </>
    );
  }
}
