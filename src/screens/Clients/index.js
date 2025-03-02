import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import UniversalButton from '../../components/UniversalButton';
import Search from './components/Search';
import ClientItem from './components/ClientItem';

const defaultClients = [
  {
    id: 1,
    name: 'Иван Игнатов',
    photo: require('../../assets/ivan.png'),
    city: 'Калининград',
    online: false,
    bio: 'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней дочкой',
  },
  {
    id: 2,
    name: 'Олег Иванов',
    photo: require('../../assets/oleg.png'),
    city: 'Москва',
    online: true,
    bio: 'По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.',
  },
  {
    id: 3,
    name: 'Сергей Чернышев',
    photo: require('../../assets/serg.png'),
    city: 'Казань',
    online: true,
    bio: 'По образованию маркетолог, много лет работал на крупные компании. Я увлекаюсь рыбалкой.',
  },
];

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@clients', jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@clients');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    
  } catch (e) {
    // error reading value
  }
};

export default function Clients({ navigation, route }) {
  const [clients, setClients] = React.useState(defaultClients);
  const [filter, setFilter] = React.useState('');
  const [filterClients, setFilterClients] = React.useState(clients);

  const loadClients = async () => {
    const storageClients = await getData();
    console.log('storageClients', storageClients);
    setClients(storageClients ?? []);
  };

  useEffect(() => {
    loadClients();
  }, []);

  useEffect(() => {
    if (route.params?.newClient) {
      // console.log('newClients0', route.params?.newClient);
      const newClients = [...clients, route.params?.newClient]; //записывает нового клиента в массив
      setClients(newClients); //записывает новый массив клиентов
      storeData(newClients); //сохраняем данные
      navigation.setParams({ newClient: undefined });
    }
  }, [route.params?.newClient, clients, navigation]);

  useEffect(() => {
    const clientsAfterfilter = clients.filter((client) =>
      client.city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    setFilterClients(clientsAfterfilter);
  }, [filter, clients]);

  const OnClientClick = (client) => {
    navigation.navigate('Profile', { client });
  };
  const RenderItem = ({ item }) => (
    <ClientItem client={item} onPress={OnClientClick} />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.droidSafeArea}>
        <StatusBar animated={true} backgroundColor="#FDFDFD" hidden={false} />
        <Header />
        <Text style={styles.titleText}>Клиенты </Text>
        <Search filter={filter} setFilter={setFilter} />
        <View style={styles.container}>
          <FlatList
            data={filterClients}
            renderItem={RenderItem}
            keyExtractor={(item) => item.name + item.city}
          />
        </View>

        <View style={styles.buttonMore}>
          <UniversalButton
            text="Добавить нового"
            active
            onPress={() => navigation.navigate('AddClient')}
          />
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

  titleText: {
    marginTop: 4,
    marginHorizontal: 24,
    fontSize: 34,
    fontWeight: 700,
  },

  buttonMore: {
    marginHorizontal: 24,
    height: 52,
  },
});
