import React from 'react'
import { SafeAreaView ,StyleSheet,Text} from 'react-native';
//import { WebView } from 'react-native-webview';

const Forums = () => {
return (

<SafeAreaView style={styles.wrapper}>
<Text>Forums</Text>

</SafeAreaView>
)


}
const styles = StyleSheet.create({
wrapper: {
flex: 1,
}
/*
,
WebView: {
marginTop: 20,
}*/


})
export default Forums;

/*
<WebView
  source={{ uri: 'http://100.70.181.156/wordpress/login/' }}
  style={styles.WebView}
  // Autres propriétés du WebView
/>
*/