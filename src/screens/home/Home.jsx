// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Linking } from "react-native";
// import axios from "axios";

// const API_URL = "https://newsdata.io/api/1/latest?apikey=pub_43318c7fb7514efc814610a57e860f40&q=news";

// const Home = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch news
//   const fetchNews = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setNews(response.data.results); // results array
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() => Linking.openURL(item.link)} // Open article link
//     >
//       {item.image_url && (
//         <Image source={{ uri: item.image_url }} style={styles.image} />
//       )}
//       <View style={styles.content}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.source}>{item.source_name}</Text>
//         <Text style={styles.description} numberOfLines={2}>
//           {item.description}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={news}
//       keyExtractor={(item) => item.article_id}
//       renderItem={renderItem}
//       contentContainerStyle={{ padding: 10 }}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   loader: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     backgroundColor: "#fff",
//     marginBottom: 12,
//     borderRadius: 12,
//     overflow: "hidden",
//     elevation: 3,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//   },
//   content: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   source: {
//     fontSize: 12,
//     color: "gray",
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     color: "#333",
//   },
// });

// export default Home;


// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { getApi } from '../../api';
// import { Image } from 'react-native';

// const Home = () => {
//   const [news, setNews] = useState([]);
//   useEffect(() => fetchNews(), [])

//   const fetchNews = async () => {
//     try {
//       const data = await getApi("/latest", {
//         apikey: "pub_43318c7fb7514efc814610a57e860f40",
//         q: "news",
//       })
//       setNews(data.results)

//     }
//     catch (error) {
//       console.log("Error fetching news:", error.message);
//     }
//   }
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <TouchableOpacity onPress={() => Linking.openURL(item.link)}>

//           {item.image_url && <Image style={styles.image} source={{ uri: item.image_url }} />}
//           <View>
//             <Text>
//               {item.title}
//             </Text>
//             <Text numberOfLines={2}>
//               {item.source_name}

//             </Text>
//             <Text numberOfLines={2}>
//               {item.description}
//             </Text>
//           </View>

//         </TouchableOpacity>
//       </View>

//     )

//   }


//   return (
//     <FlatList
//       data={news}
//       renderItem={renderItem} />

//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   card: {
//     flex: 1
//   }, image: { height: 500, width: 500,resizeMode:"cover" }
// })


// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";

// const NewsScreen = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const response = await fetch(
//         "https://newsapi.org/v2/everything?q=apple&from=2025-08-28&to=2025-08-28&sortBy=popularity&apiKey=1140998042ed4758948083833b15c12d"
//       );
//       const data = await response.json();
//       setArticles(data.articles || []);
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     }
//   };

//   const openUrl = (url) => {
//     Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.card} onPress={() => openUrl(item.url)}>
//       {item.urlToImage && (
//         <Image source={{ uri: item.urlToImage }} style={styles.image} />
//       )}
//       <View style={styles.content}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.description} numberOfLines={3}>
//           {item.description}
//         </Text>
//         <Text style={styles.source}>Source: {item.source.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={articles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   card: {
//     marginBottom: 15,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 10,
//     overflow: "hidden",
//     elevation: 3,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//   },
//   content: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     color: "#333",
//     marginBottom: 5,
//   },
//   source: {
//     fontSize: 12,
//     color: "gray",
//   },
// });

// export default NewsScreen;










////




// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, TouchableOpacity, Linking, ActivityIndicator, StyleSheet } from "react-native";
// import { getAppleNews } from "../api/newsService";

// export default function Home() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const data = await getAppleNews();
//         setArticles(data.articles); // NewsAPI returns { articles: [...] }
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🍏 Apple News</Text>

//       <FlatList
//         data={articles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity 
//             style={styles.card} 
//             onPress={() => Linking.openURL(item.url)}
//           >
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.source}>{item.source.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: "#fff" },
//   header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
//   card: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
//   title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
//   source: { fontSize: 12, color: "gray" },
//   center: { flex: 1, justifyContent: "center", alignItems: "center" },
// });




// import React, { useEffect, useState } from "react";
// import { 
//   View, Text, FlatList, TouchableOpacity, Linking, 
//   ActivityIndicator, StyleSheet, Image 
// } from "react-native";
// import { getAppleNews } from "../api/newsService";

// export default function Home() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const data = await getAppleNews();
//         setArticles(data.articles); 
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🍏 Apple News</Text>

//       <FlatList
//         data={articles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity 
//             style={styles.card} 
//             onPress={() => Linking.openURL(item.url)}
//           >
//             {/* News Image */}
//             {item.urlToImage && (
//               <Image 
//                 source={{ uri: item.urlToImage }}
//                 style={styles.image}
//                 resizeMode="cover"
//               />
//             )}

//             {/* News Details */}
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.desc} numberOfLines={2}>
//                 {item.description}
//               </Text>
//               <Text style={styles.meta}>
//                 {item.source?.name} • {new Date(item.publishedAt).toDateString()}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 12, backgroundColor: "#fff" },
//   header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
//   card: { 
//     flexDirection: "row", 
//     marginBottom: 12, 
//     backgroundColor: "#f9f9f9", 
//     borderRadius: 10, 
//     overflow: "hidden",
//     elevation: 2 
//   },
//   image: { width: 100, height: 100 },
//   textContainer: { flex: 1, padding: 10, justifyContent: "space-between" },
//   title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
//   desc: { fontSize: 13, color: "#444", marginBottom: 6 },
//   meta: { fontSize: 12, color: "gray" },
//   center: { flex: 1, justifyContent: "center", alignItems: "center" },
// });


// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { getAppleNews } from '../api/newsService'

// const Home = () => {
//   const [articles, setArticles] = useState([])

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await getAppleNews();
//       setArticles(response.articles)
//     }
//     fetchNews()
//   }, [])

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity>
//         <View style={styles.card}>
//           <Image 
//             style={styles.image} 
//             source={{ uri: item.urlToImage }} 
//           />

//           <View style={styles.textContainer}> 
//             <Text 
//               style={styles.title} 
//               numberOfLines={1} 
//               ellipsizeMode="tail"
//             >
//               {item.title}
//             </Text>

//             <Text 
//               style={styles.description} 
//               numberOfLines={2} 
//               ellipsizeMode="tail"
//             >
//               {item.description}
//             </Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     )
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList 
//         data={articles}
//         renderItem={renderItem} 
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   card: {
//     padding: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     width: "100%",
//   },
//   image: {
//     height: 100, 
//     width: 100, 
//     borderRadius: 8,
//   },
//   textContainer: {
//     flex: 1,           // take remaining space
//     marginLeft: 10,    // spacing from image
//   },
//   title: {
//     fontWeight: "bold",
//     flexShrink: 1,     // prevent overflow
//   },
//   description: {
//     color: "gray",
//     marginTop: 4,
//     flexShrink: 1,     // prevent overflow
//   },
// })




// import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { getAppleNews } from '../api/newsService'


// const Home = () => {
//   const [article, setArticles] = useState([])

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await getAppleNews();
//       setArticles(response.articles)
//     }
//     fetchNews()
//   }, [])

//   const renderItem = ({ item }) => {
//     return (
//       <View style={{ flex: 1,}}>
//         <TouchableOpacity onPress={()=>Linking.openURL((item.url))}>
//           <View style={styles.card}>
//           <Image style={{ height: 100, width: 100 ,borderRadius:11}} source={{ uri: item.urlToImage }} />
//           <View style={{flex:1,margin:10}}> 
//             <Text style={{flexShrink:1,}} numberOfLines={1} >
//               {item.title}
//             </Text>
//             <Text style={{flexShrink:1}} numberOfLines={1} >
//               {item.description}
//             </Text>
//           </View>
//           </View>
//         </TouchableOpacity>
//       </View>
//     )
//   }

//   return (
//     <View style={{flex:1}}>
//       <FlatList data={article}
//         renderItem={renderItem} />

//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   card:{padding:10,flexDirection:"row",alignItems:"center"}
// })



// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import { getAppleNews } from "../api/newsService";

// const Home = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await getAppleNews();
//       setArticles(response.articles || []);
//     };
//     fetchNews();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.card}>
//       <Image source={{ uri: item.urlToImage }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.source}>{item.source.name}</Text>
//         <Text style={styles.title} numberOfLines={2}>
//           {item.title}
//         </Text>
//         <Text style={styles.time}>2h ago</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         {/* Apple News Icon */}
//         <Text style={styles.appleIcon}></Text>
//         <Text style={styles.newsText}>News</Text>
//       </View>

//       {/* Date */}
//       <Text style={styles.date}>August 19</Text>

//       {/* Top Stories */}
//       <Text style={styles.topStories}>Top Stories</Text>

//       {/* News List */}
//       <FlatList
//         data={articles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 12,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 4,
//   },
//   appleIcon: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginRight: 5,
//   },
//   newsText: {
//     fontSize: 24,
//     fontWeight: "700",
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#666",
//   },
//   topStories: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 12,
//     color: "darkpink", // you can replace with "#d63384"
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     marginBottom: 16,
//     overflow: "hidden",
//     elevation: 3,
//   },
//   image: {
//     width: "100%",
//     height: 180,
//   },
//   textContainer: {
//     padding: 10,
//   },
//   source: {
//     fontSize: 12,
//     fontWeight: "bold",
//     color: "#555",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginVertical: 4,
//   },
//   time: {
//     fontSize: 12,
//     color: "#888",
//   },
// });








// import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React, { useEffect, useState } from "react";
// import { getAppleNews } from "../api/newsService";

// const Home = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const response = await getAppleNews();
//       setArticles(response.articles );
//     };
//     fetchNews();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={()=>Linking.openURL(item.url)} style={styles.card}>
//       <Image source={{ uri: item.urlToImage }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.source}>{item.source.name}</Text>
//         <Text style={styles.title} numberOfLines={2}>
//           {item.title}
//         </Text>
//         <Text style={styles.time}>2h ago</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>


//       <FlatList
//         data={articles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderItem}
//         ListHeaderComponent={<View>
//            <View style={styles.header}>

//  <Text style={styles.appleIcon}></Text>
//  <Text style={styles.newsText}>News</Text>
// </View>


// <Text style={styles.date}>August 29</Text>


// <Text style={styles.topStories}>Top Stories</Text>


//         </View>
//           }


//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 12,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 4,
//   },
//   appleIcon: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginRight: 5,
//   },
//   newsText: {
//     fontSize: 24,
//     fontWeight: "700",
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#666",
//   },
//   topStories: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 12,
//     color: "darkpink", 
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     marginBottom: 16,
//     overflow: "hidden",

//   },
//   image: {
//     width: "100%",
//     height: 180,
//   },
//   textContainer: {
//     padding: 10,
//   },
//   source: {
//     fontSize: 12,
//     fontWeight: "bold",
//     color: "#555",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginVertical: 4,
//   },
//   time: {
//     fontSize: 12,
//     color: "#888",
//   },
// });


import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAppleNews } from "../api/newsService";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loader,setLoader] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getAppleNews();
      setArticles(response.articles);
      setLoader(false)
    };
    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => Linking.openURL(item.url)}
      style={styles.card}
    >
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.source}>{item.source.name}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.time}>2h ago</Text>
      </View>
    </TouchableOpacity>
  );
  if(loader){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator color="blue" size="large"/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.appleIcon}></Text>
              <Text style={styles.newsText}>News</Text>
            </View>
            <Text style={styles.date}>August 29</Text>
            <Text style={styles.topStories}>Top Stories</Text>
          </View>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:10
 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  appleIcon: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5,
  },
  newsText: {
    fontSize: 24,
    fontWeight: "700",
  },
  date: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  topStories: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "deeppink", // fixed invalid "darkpink"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 10,
  },
  source: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});
