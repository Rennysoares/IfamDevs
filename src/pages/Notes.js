import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notes() {
  const DATA = [
    {
      id: '1',
      title: 'Teste',
      date: '02/05/2024',
      content: 'Lorem ipsum dolor amet consectetur',
    },
    {
      id: '2',
      title: 'Ácido Clorídrico',
      date: '02/05/2024',
      content: 'faspodfjaspodjfopajdfadfaasdfkdfosakf',
    },
    {
      id: '3',
      title: 'Monóxido de carbono',
      date: '02/05/2024',
      content: 'wrkwp kapákr p´weakrwea´rkewaprpawkeák',
    },
    {
      id: '4',
      title: 'Alaranjado de ....',
      date: '02/05/2024',
      content: 'r2o3r jo2p3jrpo23jrp j23prj2 oprjop23jr',
    },
    {
      id: '5',
      title: 'Test',
      date: '02/05/2024',
      content: 'requeijão com açúcar',
    },
    {
      id: '6',
      title: 'My sla',
      date: '02/05/2024',
      content: 'jfajfojfwoepjpejfpowejfpowjefpoewjpofwjepofjwpejfpowejfpowjepofjwe',
    },
    {
      id: '7',
      title: 'Não sei de nada',
      date: '02/05/2024',
      content: 'requeijão com farinha akskjsakajskjkasjkjakjska',
    },
    {
      id: '8',
      title: 'Last Player',
      date: '02/05/2024',
      content: 'requeijão com mingau',
    },
  ];

  const Item = ({title, content, date}) => (
    <View style={{marginTop: 20}}>
      <View style={styles.item}>
        <Text style={styles.titleflat}>{title}</Text>
        <Text>{content}</Text>
      </View>
      <Text style={styles.dateflat}>{date}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} content={item.content} date={item.date}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item:{
    width: 165,
    height: 200,
    overflow: 'hidden',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    margin: 3,
    borderRadius: 10
  },
  dateflat:{
    textAlign: 'center',
    fontSize: 12
  },
  titleflat:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});