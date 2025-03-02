import { StyleSheet, TextInput, View, Image } from 'react-native';

export default function Search({ filter, setFilter }) {
  return (
    <View style={styles.searchConteiner}>
      <Image
        style={styles.image}
        source={require('../../../assets/IconFind.png')}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setFilter(text);
        }}
        value={filter}
        placeholder={'Поиск'}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    aspectRatio: 1,
    borderRadius: 16,
    marginLeft: 12,
  },
  searchConteiner: {
    height: 44,
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
    placeholderTextColor: '#A3A3A3',
  },
});
