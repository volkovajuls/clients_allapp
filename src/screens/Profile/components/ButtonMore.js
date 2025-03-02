import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function ButtonMore() {
  return (
    <TouchableOpacity style={styles.buttonWhiteMoreSize}>
      <Text style={styles.buttonWhiteText}>Показать больше</Text>
      <View style={styles.imageMoreConteiner}>
        <Image style={styles.imageMore} source={require('../../../assets/Icon.png')} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWhiteMoreSize: {
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: '#FB7360',
    backgroundColor: '#FFFFFF',

    height: 52,
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonWhiteText: {
    color: '#FB7360',
    fontWeight: '700',
    fontSize: 16,
    marginVertical: 14,
    marginHorizontal: 24,
    alignSelf: 'center',
  },

  imageMoreConteiner: {
    marginLeft: 4,
    marginVertical: 14,
    paddingLeft: 5,
    paddingHorizontal: 5,
    paddingTop: 9,
    paddingBottom: 7,
    marginRight: 4,
  },
  imageMore: {
    width: 14,
    height: 8,
  },
});
