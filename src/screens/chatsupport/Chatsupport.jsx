import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Chatsupport = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Top Image */}
      <Image
        style={styles.topImage}
        source={require("../../assets/images/travel.png")}
      />

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.title}>Santorini</Text>
        <Text style={styles.subTitle}>Greek</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugit laudantium ipsum itaque illum animi! Voluptate temporibus 
          repellendus aliquid repellat facere odio, dolores fuga possimus 
          voluptatibus molestiae quaerat, nobis illum necessitatibus.
        </Text>
      </View>

      {/* Gallery Section */}
      <View style={styles.gallerySection}>
        <Text style={styles.galleryTitle}>Gallery</Text>
        <View style={styles.galleryGrid}>
          {Array(6).fill(0).map((_, i) => (
            <Image
              key={i}
              style={styles.imageBox}
              source={require("../../assets/images/travel.png")}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Chatsupport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  infoSection: {
    borderRadius: 20,
    padding: 15,
  },
  title: {
    fontSize: 32,
    color: "purple",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  gallerySection: {
    padding: 15,
  },
  galleryTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageBox: {
    width: "32%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
})
