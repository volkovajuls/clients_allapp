import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';


export default function Header({ back, text, edit,navigation}) {
  if (!text) text = null;
  return (
    <View style={styles.buttonNav}>
    <TouchableOpacity onPress={()=> navigation.goBack()}>
      <View style={styles.imageConteiner}>
        <Image
          style={styles.image}
          source={back ? require('../assets/arrow-left.png') : null}
        />
      </View>
      </TouchableOpacity>
      <Text style={styles.textTitle}>{text}</Text>
      <View style={styles.imageConteiner}>
        <Image
          style={styles.image}
          source={edit ? require('../assets/EditSquare.png') : null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonNav: {
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 42,
  },
  image: {
    width: 24,
    height: 24,
    aspectRatio: 1,
    borderRadius: 16,
  },
  imageConteiner: {
    paddingHorizontal: 9,
    paddingVertical: 10,
    marginRight: 14,
    marginLeft: 11,
    marginVertical: 1,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 600,
    paddingVertical: 11,
  },
});
