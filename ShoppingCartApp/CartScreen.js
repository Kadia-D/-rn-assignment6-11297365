// CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        let cart = await AsyncStorage.getItem('cart');
        cart = cart ? JSON.parse(cart) : [];
        setCart(cart);
      } catch (error) {
        console.error(error);
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (product) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      cart = cart.filter((item) => item.id !== product.id);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      setCart(cart);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
        <View style= {styles.header}>
        <Image
        source={require('./assets/Logo.png')}
        style={styles.image2}
        resizeMode="contain"
      />
      
      <Image
        source={require('./assets/Search.png')}
        style={styles.image3}
        resizeMode="contain"
      />
        </View>
       <Image source = {require('./assets/image.png')}
          style = {styles.screenshot}/>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <Text style = {{fontSize: 35, fontFamily: 'Hercules'}}>{item.name}</Text>
            <Text style = {{fontSize: 30, color: 'maroon', fontFamily: 'Hercules'}}> ${item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() =>removeFromCart(item)}>
                <Image source={require('./assets/remove.png')} style={styles.addIcon} />
              </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  product: {
    marginBottom: 30,
    
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'flex-start', // Align items at the start (left)
    padding: 20,
    marginBottom: 40,
  },
  image2: {
    width: 130,
    height: 150,
    marginLeft: 80, // Adjust as needed to create space between images
    marginTop: -80,
  },
  image3: {
    width: 40,
    height: 40,
    marginLeft: 280,
    marginTop: -100,
    },
    screenshot:{
        marginLeft:1,
        width: 380,
        marginTop: 0,
    }
});

export default CartScreen;
