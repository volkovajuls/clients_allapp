import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import UniversalButton from '../../components/UniversalButton';
import Header from '../../components/Header';

import FieldComp from './components/FieldComp';
import React from 'react';

export default function AddClient({navigation}) {
  const [titlePhoto, setTitlePhoto] = React.useState('');
  const [titleName, setTitleName] = React.useState('');
  const [titleCity, setTitleCity] = React.useState('');
  const [titlePhone, setTitlePhone] = React.useState('');
  const [titleBio, setTitleBio] = React.useState('');

  const addNewClient = () => {
    const client = {
      // id: Math.round(Math.random(100)),
      photo: titlePhoto,
      name: titleName,
      city: titleCity,
      telNumber: titlePhone,
      bio: titleBio,
    };
    navigation.navigate('Clients', {newClient:client})
    console.log('новый клиент', client);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.droidSafeArea}>
        <StatusBar animated={true} backgroundColor="#FDFDFD" hidden={false} />
        <Header back text="Добавить нового" navigation={navigation}/>

        <ScrollView style={styles.styleScrollView}>
          <View style={styles.container}>
            <FieldComp
              title="Фото"
              placeholder="Вставьте ссылку на фото"
              value={titlePhoto}
              onChangeText={setTitlePhoto}
            />
            <FieldComp
              title="ФИО"
              placeholder="Введите фамилию и имя"
              value={titleName}
              onChangeText={setTitleName}
            />
            <FieldComp
              title="Номер телефона"
              placeholder="+7 (000) 000 00 00"
              value={titlePhone}
              onChangeText={setTitlePhone}
            />
            <FieldComp
              title="Город"
              placeholder="Выберите город"
              value={titleCity}
              onChangeText={setTitleCity}
            />
            <FieldComp
              title="Био"
              placeholder="Укажите хобби, интересы, образование и стаж работы"
              multiline
              value={titleBio}
              onChangeText={setTitleBio}
            />
          </View>
        </ScrollView>

        <View style={styles.buttonMore}>
          <UniversalButton text="Добавить" active onPress={addNewClient} />
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

  styleScrollView: {
    marginTop: 12,
    height: 160,
  },

  buttonMore: {
    marginHorizontal: 24,
    height: 52,
  },
});
