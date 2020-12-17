import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {

  render() {
    return <WebView 
            source={{ uri: 'https://www.crack1.kr/' }} 
            onNavigationStateChange ={(e)=>console.log(e)}
            onMessage ={(e)=>console.log(e)}
            style={{ marginTop: 20 }} 
          />;
  }
}