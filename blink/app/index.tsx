import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

const data = [
  { id: '1', text: 'Mobile Development' },
  { id: '2', text: 'Web Development' },
  { id: '3', text: 'Push Ups' },
  { id: '4', text: 'HR Meeting' },
  { id: '5', text: 'Operation: Get Together' },
  { id: '6', text: 'Fix The Country Initiative' },
  { id: '7', text: 'Project Launch' },
  { id: '8', text: 'Code Readjustment' },
  { id: '9', text: 'Database Update' },
  { id: '10', text: 'Code Dev Meeting' },
  { id: '11', text: 'Money Matter' },
  { id: '12', text: 'Task Update' },
  { id: '13', text: 'Movie Database Update' },
  { id: '14', text: 'Site upgrade' },
  { id: '15', text: 'Finance Database Readjustment' },
];

const data2 = [
  { id: '1', text: 'Exercise', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '2', text: 'Study', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '3', text: 'Missions', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '4', text: 'Database', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '5', text: 'Research', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '6', text: 'Coding', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '7', text: 'Site Files', uri: 'https://reactnative.dev/img/tiny_logo.png' },
  { id: '8', text: 'Context', uri: 'https://reactnative.dev/img/tiny_logo.png' },
];

export default function Index() {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.uri }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.text}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

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

      <FlatList
        data={data2}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.subheading}>Ongoing</Text>

      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
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
    backgroundColor: '#f7f0e8',
  },
  container2: {
    // Add styles for categories container if needed
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
    marginBottom: 10,
    marginTop: 20,
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
    borderRadius: 20,
    backgroundColor: '#ffffff', // Background color
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  horizontalList: {
    paddingVertical: 10,
  },
  categoryItem: {
    width: 186,
    height: 192,
    marginRight: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'relative', // Needed for absolute positioning
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    left: 43,
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    textAlign: 'center',
  },
});
