import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

export default function UniversalButton({
  text = null,
  active = false,
  onPress,
}) {
  // if (!active) active = false
  // if(!text) text = null
  
  return (
    <TouchableOpacity
      style={active ? styles.buttonColor : styles.buttonWhite}
      onPress={onPress}>
      <Text style={active ? styles.buttonColorText : styles.buttonWhiteText}>
        {text}
      </Text>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonColor: {
    borderRadius: 16,
    backgroundColor: '#FB7360',
    width: 'auto',
    height: 52,
    flex: 1,
    marginHorizontal: 6,
  },
  buttonColorText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    marginVertical: 14,
    marginHorizontal: 24,
    alignSelf: 'center',
  },
  buttonWhite: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#FB7360',
    width: 'auto',
    height: 52,
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginRight: 6,
    marginHorizontal: 6,
  },
  buttonWhiteText: {
    color: '#FB7360',
    fontWeight: '700',
    fontSize: 16,
    marginVertical: 14,
    marginHorizontal: 24,
    alignSelf: 'center',
  },
});
