/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RenderHtml from 'react-native-render-html';

const source = {
  html: `
  <img src="data:image/png;base64,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" class="my_image" alt="my image logo">
  `
};





function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:Colors.lightwhite}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Home">
        
          </Section>
          <Section title="Notification">

          </Section>
          <Section title="Chat">
            
          </Section>
          <Section title="About">
          
          </Section>
        </View>
        <RenderHtml
        source={source}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    backgroundColor: `aquamarine`,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 0,
    fontSize: 10,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
