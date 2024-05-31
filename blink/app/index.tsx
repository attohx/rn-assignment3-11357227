import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from 'react-native';

const data = [

  {id: '1', text: 'Box 1' },
  {id: '2', text: 'Box 1' },
  {id: '3', text: 'Box 1' },
  {id: '4', text: 'Box 1' },
  {id: '5', text: 'Box 1' },
  {id: '6', text: 'Box 1' },
  {id: '7', text: 'Box 1' },
  {id: '8', text: 'Box 1' },
  {id: '9', text: 'Box 1' },
  {id: '10', text: 'Box 1' },
  {id: '11', text: 'Box 1' },
  {id: '12', text: 'Box 1' },
  {id: '13', text: 'Box 1' },
  {id: '14', text: 'Box 1' },
  {id: '15', text: 'Box 1' },
];

export default function Index() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Hello Devs,</Text>
        <Text>14 tasks today</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.headerImage}
        />
      </View>


      <TextInput style={styles.input} placeholder="Search" />

      <Text style={styles.subheading}>Categories</Text>

      <View style={styles.container2}>
        
      </View>
      

      <Text style={styles.subheading}>Ongoing</Text>

      const renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}

      <FlatList 
        data = {data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container2}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor:'#f7f0e8',
  },

  container2: {
    
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: '100%',
  },
  list: {
    width: '100%',
    marginBottom: 16,
  },
  
  item: {
    padding: 10,
    fontSize: 18,
    height: 128,
    width: 354,
    left: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Background color
    marginBottom: 10,
  },

  image: {
    width: 50,
    height: 50,
  },
  box: {
    fontSize: 18,
    height: 128,
    width: 354,
    left: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff', // Background color
    marginBottom: 10,
    padding: 10,
    alignItems: 'right',
    justifyContent: 'flex-start',


  },

  text: {
    fontSize: 18,
    color: '#333',

  },

});
