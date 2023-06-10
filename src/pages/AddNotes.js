import { StyleSheet, Text, View } from 'react-native';

export default function AddNotes() {
  return (
    <View style={styles.container}>
      <Text>Add Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});