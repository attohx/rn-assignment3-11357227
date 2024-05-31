import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

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
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.text}</Text>
      <Image source={{ uri: item.uri }} style={styles.categoryImage} />
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
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.headerImage} />
      </View>
      <View>
        <Text>14 tasks today</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subheading}>Categories</Text>

      <View style={styles.container2}>
        <FlatList
          data={data2}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>

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
    marginBottom: 20,
  },

  container2: {
    height: 186,
    width: '100%',
    justifyContent: 'space-between',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns items with equal space between them
    marginBottom: 10,
    marginTop: 10,
    height: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginRight: 10, // Added margin to the right to separate from the button
  },

  searchButton: {
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10, // Added padding to the button for better visual
  },

  searchButtonText: {
    color: 'white',
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
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
