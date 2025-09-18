// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   FlatList,
// } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Icon from "react-native-vector-icons/Feather";
// import Product from '../product/Product';
// import Item from '../item/Item';
// import Customheader from '../../components/Customheader';

// const Tab = createMaterialTopTabNavigator();

// const History = () => {
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("name");
//   const [sortLabel, setSortLabel] = useState("Sort by Name");
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [id, selectedId] = useState(1); 

//   const sortOptions = [
//     { label: "Sort by Name", value: "name", id: 1 },
//     { label: "Sort by Section", value: "section", id: 2 },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Customheader/>
      
//       {/* Search Row */}
//       <View style={styles.searchRow}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search..."
//           value={search}
//           onChangeText={setSearch}
//         />

//         {/* Sort by Button */}
//         <TouchableOpacity
//           style={styles.dropdownBtn}
//           onPress={() => setDropdownVisible(!dropdownVisible)}
//         >
//           <View style={{ flexDirection: "row" }}>
//             <Text style={{ color: "#4d6fa9" }}>{sortLabel}</Text>
//           </View>
//           <Icon name="chevron-down" size={18} color="black" />
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown list */}
//       {dropdownVisible && (
//         <View style={styles.dropdown}>
//           <FlatList
//             data={sortOptions}

//             renderItem={({ item }) => (
//               <TouchableOpacity
//                 style={[
//                   styles.dropdownItem,

//                 ]}
//                 onPress={() => {
//                   setSortBy(item.value);
//                   setSortLabel(item.label);
//                   setDropdownVisible(false);
//                   selectedId(item.id);
//                 }}
//               >
//                 <Text style={item.id === id ? { color: "#4d6fa9", fontWeight: "bold", fontFamily: "bold" } : {}}>
//                   {item.label}
//                 </Text>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       )}

//       {/* Tabs */}
//       <Tab.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: "white",
//           tabBarInactiveTintColor: '#000',
//           tabBarStyle: { backgroundColor: '#E1ECFD' },
//           tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
//           tabBarIndicatorStyle: {
//             backgroundColor: '#4d6fa9',
//             height: '100%',
//           }
          
//         }}
//       >
//         <Tab.Screen name="Product" options={{
//           header: () => <Customheader />, // 👈 your header goes here
//         }} >
//           {() => <Product search={search} sortBy={sortBy} />}
//         </Tab.Screen>
//         <Tab.Screen name="Item">
//           {() => <Item search={search} sortBy={sortBy} />}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// export default History;

// const styles = StyleSheet.create({
//   searchRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     overflow: "hidden",
//     paddingVertical: 4,

//   },
//   searchBar: {
//     flex: 1,
//     height: 45,
//     paddingHorizontal: 15,
//     fontSize: 16,
//   },
//   dropdownBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     height: 45,
//     backgroundColor: "#fff",
//   },
//   dropdown: {
//     position: "absolute",
//     top: 55,
//     right: 15,
//     backgroundColor: "#fff",
//     zIndex: 1000,
//     width: 160,
//     elevation: 4,
//   },
//   dropdownItem: {
//     padding: 9,
//     borderBottomColor: "#eee",
//   },
// });




import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/Feather";
import Product from '../product/Product';
import Item from '../item/Item';
import Customheader from '../../components/Customheader';

const Tab = createMaterialTopTabNavigator();

const History = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortLabel, setSortLabel] = useState("Sort by Name");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [id, selectedId] = useState(1);

  const sortOptions = [
    { label: "Sort by Name", value: "name", id: 1 },
    { label: "Sort by Section", value: "section", id: 2 },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Customheader />

      {/* Search Row */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />

        {/* Sort by Button */}
        <TouchableOpacity
          style={styles.dropdownBtn}
          onPress={() => setDropdownVisible(true)}
        >
          <Text style={{ color: "#4d6fa9", marginRight: 5 }}>{sortLabel}</Text>
      
        </TouchableOpacity>
      </View>

      {/* Bottom Drawer Sort Menu */}
      {dropdownVisible && (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.bottomSheet}>
            <Text style={styles.sheetTitle}>Sort Options</Text>
            {sortOptions.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.dropdownItem,
                  item.id === id && { backgroundColor: "#E1ECFD" }
                ]}
                onPress={() => {
                  setSortBy(item.value);
                  setSortLabel(item.label);
                  setDropdownVisible(false);
                  selectedId(item.id);
                }}
              >
                <Text
                  style={[
                    { fontSize: 16 },
                    item.id === id && { color: "#4d6fa9", fontWeight: "bold" }
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      )}

      {/* Tabs */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: '#000',
          tabBarStyle: { backgroundColor: '#E1ECFD' },
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
          tabBarIndicatorStyle: {
            backgroundColor: '#4d6fa9',
            height: '100%',
          }
        }}
      >
        <Tab.Screen name="Product">
          {() => <Product search={search} sortBy={sortBy} />}
        </Tab.Screen>
        <Tab.Screen name="Item">
          {() => <Item search={search} sortBy={sortBy} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
    paddingVertical: 4,
   
  },
  searchBar: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  dropdownBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 45,
    backgroundColor: "#fff",
  },
  overlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    zIndex: 999,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#4d6fa9",
  },
  dropdownItem: {
    padding: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});


