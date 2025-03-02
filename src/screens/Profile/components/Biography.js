import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Biography({person}) {
  return (
    <View style={styles.descriptionConteiner}>
      <View>
        <Text style={styles.titleText}>Биография</Text>
      </View>

      <ScrollView style={styles.styleScrollView}>
        <Text style={styles.descriptionText}>
          {person?.bio} 
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  styleScrollView: {
    marginTop: 12,
    height: 160,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 700,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#A3A3A3',
  },
  descriptionConteiner: {
    marginTop: 72,
    marginHorizontal: 24,
  },
});
