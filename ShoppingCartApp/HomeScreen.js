// HomeScreen.js
/*
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Office Wear', price: 120, image : require('./assets/dress1.png') },
    { id: '2', name: 'Black', price: 120,  image : require( './assets/dress2.png') },
    { id: '3', name: 'Church Wear', price: 120, image: require('./assets/dress3.png') },
    { id: '4', name: 'Lamerei', price: 120, image: require('./assets/dress4.png') },
    { id: '5', name: '21WN', price: 120, image: require('./assets/dress5.png') },
    { id: '6', name: 'Lopo', price: 120, image: require('./assets/dress6.png') },
    { id: '7', name: '21WN', price: 120, image: require('./assets/dress7.png') },
    { id: '8', name: 'lame', price: 120, image: require('./assets/dress3.png') },
  ]);

  const addToCart = async (product) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
            <Image source={require('./assets/add_circle.png')} style={styles.addIcon} />
          </TouchableOpacity>
            <Text>{item.name} - ${item.price}</Text>
            
          </View>
        )}
      />
      <Button title="View Cart" onPress={() => navigation.navigate('CartScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  product: {
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 15,
    padding: 5,
  },
  addIcon: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;*/

// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Office Wear', price: 120, image: require('./assets/dress1.png') },
    { id: '2', name: 'Black', price: 120, image: require('./assets/dress2.png') },
    { id: '3', name: 'Church Wear', price: 120, image: require('./assets/dress3.png') },
    { id: '4', name: 'Lamerei', price: 120, image: require('./assets/dress4.png') },
    { id: '5', name: '21WN', price: 120, image: require('./assets/dress5.png') },
    { id: '6', name: 'Lopo', price: 120, image: require('./assets/dress6.png') },
    { id: '7', name: '21WN', price: 120, image: require('./assets/dress7.png') },
    { id: '8', name: 'lame', price: 120, image: require('./assets/dress3.png') },
  ]);

  const addToCart = async (product) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      cart.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Image source={require('./assets/add_circle.png')} style={styles.addIcon} />
              </TouchableOpacity>
            </View>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        )}
      />
      <Button title="View Cart" onPress={() => navigation.navigate('CartScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  product: {
    marginBottom: 20,
    
  },
  imageContainer: {
    position: 'relative',
    width: 200,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 15,
    padding: 5,
  },
  addIcon: {
    width: 20,
    height: 20,
  },
});

export default HomeScreen;

