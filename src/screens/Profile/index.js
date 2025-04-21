import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import UniversalButton from '../../components/UniversalButton';
import Header from '../../components/Header';
import Biography from './components/Biography';

import Person from './components/Person';
import ButtonMore from './components/ButtonMore';

export default function Profile({ navigation, route }) {
  const person = route.params?.client;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.droidSafeArea}>
        <StatusBar animated={true} backgroundColor="#FDFDFD" hidden={false} />
        <Header back edit navigation={navigation} />

        <View style={styles.container}>
          <Person person={person} />
          <View style={styles.buttonConteiner}>
            <UniversalButton text="Чат" /> {/* text="Чат"*/}
            <UniversalButton text="Звонок" active />
          </View>
          <Biography person={person} />
        </View>

        <View style={styles.buttonMore}>
          <ButtonMore />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    justifyContent: 'space-between',
  },

  buttonConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 32,
  },

  buttonMore: {
    marginHorizontal: 24,
  },
});
