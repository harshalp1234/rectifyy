import { StyleSheet, Text, View,FlatList ,Image,ActivityIndicator} from 'react-native'
import React from 'react'
import { fetchCartItems } from '../../slice/CartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Wishlist = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cartitems);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  if (products.isLoader) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color="#3b82f6" size="large" />
      </View>
    );
  }

  if (products.isError) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Something went wrong...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.price}>₹ {item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={products.data} 
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  center: {
    flex: 1, 
    justifyContent:"center", 
    alignItems:"center"
  },
  errorText: {
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
    resizeMode: "contain",
  
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3b82f6",
  }
});


