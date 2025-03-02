import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ClientItem({ client, onPress }) {
  // console.log ("on press", onPress)
  if (!client) client = null;

  if (Object.keys(client).length === 0) {
    return;
  }

  return (
    <TouchableOpacity
      style={styles.itemConteiner}
      onPress={() => onPress(client)}>
      <View style={[styles.itemrow, styles.shadow]}>
        <View>
          <View style={client.online ? styles.circle : null} />
          <Image style={styles.imageProfile} source={client.photo} />
        </View>
        <View style={styles.nameContainer}>
          {Boolean(client?.name) && (
            <Text style={styles.nameText}>{client.name}</Text>
          )}
          {Boolean(client?.city) && (
            <Text style={styles.cityText}>{client.city}</Text>
          )}
        </View>

        <View style={styles.iconConteiner}>
          <Image
            style={styles.iconRight}
            source={require('../../../assets/IconRight.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemConteiner: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  itemrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    backgroundColor: 'white',
    height: 92,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.41,
    elevation: 2,
  },
  iconRight: {
    width: 8,
    height: 14,
  },
  iconConteiner: {
    marginRight: 16,
    marginVertical: 34,
  },
  imageProfile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    // alignSelf: 'center',
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 700,
    paddingTop: 16,
  },
  cityText: {
    fontSize: 13,
    fontWeight: 400,
    paddingTop: 4,
    color: '#A3A3A3',
  },
  nameContainer: {
    marginLeft: 16,
    flex: 1,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3DA31A',
    position: 'absolute',
    top: 37,
    right: 3,
    zIndex: 10,
  },
});
