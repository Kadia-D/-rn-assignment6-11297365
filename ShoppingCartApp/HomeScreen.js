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
        <View style = {styles.header}>
        <View style={styles.header}>
      <View style={styles.imageHeader}>
        <Image
          source={require('./assets/Menu.png')}
          style={styles.image1}
          resizeMode="contain"
        />
      </View>
      <Image
        source={require('./assets/Logo.png')}
        style={styles.image2}
        resizeMode="contain"
      />
      <View style={styles.sideHeader}>
      <Image
        source={require('./assets/Search.png')}
        style={styles.image3}
        resizeMode="contain"
      />
      <Image
        source={require('./assets/shoppingBag.png')}
        style={styles.image4}
        resizeMode="contain"
      />
      </View>
    </View>
    </View>
    <View style = {styles.subHeader}>
      <Text style={styles.title}>OUR STORY</Text>
      <Image
        source={require('./assets/Listview.png')}
        style={styles.image3}
        resizeMode="contain"
      />
      <Image
        source={require('./assets/Filter.png')}
        style={styles.image4}
        resizeMode="contain"
      />
      </View>
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
            <Text style = {{fontSize: 35, fontFamily: 'Hercules'}}>{item.name} </Text>
            <Text style = {{color: 'gray', fontSize: 20, fontFamily: 'Hercules'}}> reversible angora cardigan </Text>
            <Text style = {{fontSize: 30, color: 'maroon', fontFamily: 'Hercules'}}> ${item.price}</Text>
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
    fontSize: 35,
    marginBottom: 20,
    fontFamily: 'Times New Roman'
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
  header: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'flex-start', // Align items at the start (left)
    padding: 20,
    marginBottom: 40,
  },
  imageHeader: {
    position: 'absolute', // Position this container absolutely
    top: 0,
    left: 0,
  },
  image1: {
    width: 40,
    height: 40,
  },
  image2: {
    width: 100,
    height: 150,
    marginLeft: 100, // Adjust as needed to create space between images
    marginTop: -50,
  },
  image3: {
    width: 40,
    height: 40,
    marginLeft: 70,
    },
    image4: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    sideHeader: {
        marginLeft: 10,
        flexDirection: 'row',  // Items will be displayed side by side
    },
    header: {
        flexDirection: 'row',  // Items will be displayed side by side
    },
    subHeader: {
        flexDirection: 'row',  // Items will be displayed side by side
    }
});

export default HomeScreen;

