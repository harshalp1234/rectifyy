
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ITEMS_PER_PAGE = 20;

export default function Order() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const skip = page * ITEMS_PER_PAGE;
      const res = await fetch(`https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`);
      const data = await res.json();
      setProducts(prev => [...prev, ...data.products]); // always append
      setPage(prev => prev + 1); // increase page automatically
    } catch (e) {
      console.log('Error fetching products:', e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setProducts([]);
    setPage(0);
    fetchProducts();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.discount}>{item.discountPercentage}% off</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.stock}>{item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Full-screen loader for first-time loading
  if (loading && products.length === 0) {
    return (
      <View style={styles.fullScreenLoader}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}

        onEndReached={fetchProducts}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={loading ? <ActivityIndicator style={styles.loaderFooter} size="large" color="blue" />:null }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    overflow: 'hidden'
  },
  textContainer: { padding: 15 },
  title: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 4 },
  brand: { fontSize: 14, color: '#666', marginBottom: 8 },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#2ecc71', marginRight: 8 },
  discount: { fontSize: 14, color: '#e74c3c', fontWeight: '500' },
  ratingContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rating: { fontSize: 14, color: '#f39c12' },
  stock: { fontSize: 14, color: '#7f8c8d' },
  loaderFooter: { paddingVertical: 20 },
  fullScreenLoader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyContainer: { padding: 20, alignItems: 'center' },
  emptyText: { fontSize: 16, color: '#666' },
});
