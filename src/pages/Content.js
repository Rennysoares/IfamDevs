import { StyleSheet, Text, View } from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>
      <Text>Content</Text>
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