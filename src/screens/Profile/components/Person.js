import { View, StyleSheet, Text, Image } from 'react-native';

export default function Person({person}) {
  return (
    <View style={styles.personalContainer}>
      <Image
        style={styles.imageProfile}
        source={person?.photo}
      />
      <Text style={styles.nameText}>{person?.name}</Text>

      <Text style={styles.cityText}>{person?.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  personalContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  imageProfile: {
    width: 156,
    height: 156,
    borderRadius: 78,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 700,
    paddingTop: 16,
  },
  cityText: {
    fontSize: 13,
    fontWeight: 400,
    paddingTop: 4,
    color: '#A3A3A3',
  },
});
