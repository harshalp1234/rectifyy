// import { StyleSheet, Text, View, SectionList } from 'react-native';
// import React from 'react';
// import Icon from "react-native-vector-icons/Feather"
// import LinearGradient from 'react-native-linear-gradient';
// const Product = () => {
//     const dummyData = [
//         { name: "Absconding from Duty", section: "Section 15 - Armed Forces Act 2006", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Abuse of Position", section: "Section 4 Fraud Act 2006", updated: "02-05-2025", code: "PRO" },
//         { name: "Abstracting Electricity", section: "Section 13 Theft Act 1968", updated: "02-05-2025", code: "TH68058" },
//         { name: "Acquisition, Use and Possession", section: "Section 329 Proceeds of Crime Act 2002", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Bribery", section: "Section 1 Bribery Act 2010", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Blackmail", section: "Section 21 Theft Act 1968", updated: "02-05-2025", code: "BLK021" },
//         { name: "Breach of the Peace", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Burglary", section: "Section 9 Theft Act 1968", updated: "02-05-2025", code: "BUR123" },
//         { name: "Computer Misuse", section: "Section 1 Computer Misuse Act 1990", updated: "02-05-2025", code: "ITX009" },
//         { name: "Cyber Fraud", section: "Computer Misuse Act 1990", updated: "02-05-2025", code: "CYF990" },
//         { name: "Child Exploitation", section: "Section 48 Sexual Offences Act 2003", updated: "02-05-2025", code: "CHILDX" },
//         { name: "Corporate Manslaughter", section: "Corporate Manslaughter and Corporate Homicide Act 2007", updated: "02-05-2025", code: "CORP07" },
//         { name: "Criminal Trespass", section: "Section 9 Criminal Law Act 1977", updated: "02-05-2025", code: "CTRS77" },
//         { name: "Driving Under Influence", section: "Section 5 Road Traffic Act 1988", updated: "02-05-2025", code: "DUI881" },
//         { name: "Dangerous Driving", section: "Section 2 Road Traffic Act 1988", updated: "02-05-2025", code: "TRF201" },
//         { name: "Data Protection Breach", section: "Data Protection Act 2018", updated: "02-05-2025", code: "DPA18" },
//         { name: "Domestic Abuse", section: "Domestic Abuse Act 2021", updated: "02-05-2025", code: "DOM999" },
//         { name: "Escape from Custody", section: "Section 39 Prison Act 1952", updated: "02-05-2025", code: "ESC852" },
//         { name: "Environmental Crime", section: "Environmental Protection Act 1990", updated: "02-05-2025", code: "ENV990" },
//         { name: "Fraud by False Representation", section: "Section 2 Fraud Act 2006", updated: "02-05-2025", code: "FRD102" },
//         { name: "Fraud by Failing to Disclose", section: "Section 3 Fraud Act 2006", updated: "02-05-2025", code: "FRD103" },
//         { name: "Forgery and Counterfeiting", section: "Section 1 Forgery and Counterfeiting Act 1981", updated: "02-05-2025", code: "PRO" },
//         { name: "Firearms Trafficking", section: "Firearms Act 1968", updated: "02-05-2025", code: "FTR88" },
//         { name: "Gross Negligence Manslaughter", section: "Common Law", updated: "02-05-2025", code: "GNM77" },
//         { name: "Gang-Related Violence", section: "Serious Crime Act 2007", updated: "02-05-2025", code: "GANG77" },
//         { name: "Handling Stolen Goods", section: "Section 22 Theft Act 1968", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Harassment", section: "Section 2 Protection from Harassment Act 1997", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Human Trafficking", section: "Section 2 Modern Slavery Act 2015", updated: "02-05-2025", code: "TRAFF23" },
//         { name: "Homicide", section: "Common Law", updated: "02-05-2025", code: "HOM001" },
//         { name: "Identity Theft", section: "Identity Documents Act 2010", updated: "02-05-2025", code: "ID2010" },
//         { name: "Immigration Offence", section: "Immigration Act 1971", updated: "02-05-2025", code: "IMM71" },
//         { name: "Insider Trading", section: "Financial Services Act 2012", updated: "02-05-2025", code: "INS001" },
//         { name: "Joint Enterprise Offence", section: "Common Law", updated: "02-05-2025", code: "JE001" },
//         { name: "Judicial Misconduct", section: "Common Law", updated: "02-05-2025", code: "JUD999" },
//         { name: "Kidnapping", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Knife Crime", section: "Offensive Weapons Act 2019", updated: "02-05-2025", code: "KNF019" },
//         { name: "Larceny", section: "Theft Act 1968", updated: "02-05-2025", code: "LRC123" },
//         { name: "Loan Fraud", section: "Fraud Act 2006", updated: "02-05-2025", code: "LNFR06" },
//         { name: "Murder", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Manslaughter", section: "Common Law", updated: "02-05-2025", code: "HOM002" },
//         { name: "Money Laundering", section: "Proceeds of Crime Act 2002", updated: "02-05-2025", code: "POCA01" },
//         { name: "Negligence Causing Death", section: "Common Law", updated: "02-05-2025", code: "NEGL01" },
//         { name: "Obstruction of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Obstructing Police", section: "Section 89 Police Act 1996", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Perverting the Course of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Possession of Firearms", section: "Section 1 Firearms Act 1968", updated: "02-05-2025", code: "FIRE987" },
//         { name: "Public Order Offence", section: "Section 5 Public Order Act 1986", updated: "02-05-2025", code: "PO1986" },
//         { name: "Riot", section: "Section 1 Public Order Act 1986", updated: "02-05-2025", code: "RIOT001" },
//         { name: "Rape", section: "Section 1 Sexual Offences Act 2003", updated: "02-05-2025", code: "SOA1" },
//         { name: "Reckless Damage", section: "Section 1 Criminal Damage Act 1971", updated: "02-05-2025", code: "DAM101" },
//         { name: "Stalking", section: "Section 2A Protection from Harassment Act 1997", updated: "02-05-2025", code: "STK444" },
//         { name: "Smuggling", section: "Customs and Excise Management Act 1979", updated: "02-05-2025", code: "SMUG79" },
//     ];

//     // Group by first letter and sort alphabetically
//     const sections = Object.values(
//         dummyData
//             .sort((a, b) => a.name.localeCompare(b.name))
//             .reduce((acc, item) => {
//                 const letter = item.name[0].toUpperCase();
//                 if (!acc[letter]) { acc[letter] = { title: letter, data: [] } }
//                 acc[letter].data.push(item);
//                 return acc;
//             }, {})
//     );

//     return (
//         <SectionList

//             sections={sections}
//             keyExtractor={(item, index) => item.name + index}
//             renderItem={({ item }) => (
//                 <View style={{ flex: 1, width: "100%", padding: 3, marginTop: 6, }}>

//                     <View style={styles.item}>
//                         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
//                             <Text style={{ color: "#4d6fa9", fontWeight: "bold" }}>{item.name}</Text>
//                             <View style={{ flexDirection: "row", gap: 9, }}>
//                                 <Icon size={20} color="#C07C35" name="star" />
//                                 <Icon size={20} color="black" name="paperclip" />
//                             </View>
//                         </View>
//                         <View >
//                             <Text style={styles.section}>{item.section}</Text>
//                         </View>


//                         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//                             <View style={{ width: "35%", height: 30, backgroundColor: "#4d6fa9", borderTopEndRadius: 6, justifyContent: "center", alignItems: "center", }}>
//                                 <Text style={{ color: "white" }}>
//                                     date
//                                 </Text>
//                             </View>
//                             <LinearGradient
//                                 colors={["#4975d9", "#95b3f0", "#4d6fa9"]} style={{ width: "20%", height: 30, backgroundColor: "#4d6fa9", borderTopLeftRadius: 6, justifyContent: "center", alignItems: "center" }}>
//                                 <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, fontStyle: "italic" }}>
//                                     PRO
//                                 </Text>

//                             </LinearGradient>
//                         </View>
//                     </View>
//                 </View>

//             )}
//             renderSectionHeader={({ section: { title } }) => (

//                 <View style={{ justifyContent: "center", backgroundColor: "#4d6fa9", paddingVertical: 10, paddingHorizontal: 10 }}>
//                     <Text style={{ color: "white" }}>{title}</Text>
//                 </View>



//             )}
//         />
//     );
// };

// export default Product;

// const styles = StyleSheet.create({

//     item: {
//         flex: 1,
//         borderBottomLeftRadius: 10,
//         borderBottomEndRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: "#E1ECFD",
//         borderWidth: 1,
//         borderColor: "grey",
//         elevation: 5,
//         justifyContent: "space-evenly",
//         margin: 3,
//     },
//     section: {
//         color: "grey",
//         marginBottom: 5,
//     },
// });








// import { StyleSheet, Text, View, SectionList, TextInput } from 'react-native';
// import React, { useState } from 'react';
// import Icon from "react-native-vector-icons/Feather";
// import LinearGradient from 'react-native-linear-gradient';

// const Product = () => {
//   const dummyData = [
//     { name: "Absconding from Duty", section: "Section 15 - Armed Forces Act 2006", updated: "02-05-2025", code: "CJS Codes" },
//     { name: "Abuse of Position", section: "Section 4 Fraud Act 2006", updated: "02-05-2025", code: "PRO" },
//     { name: "Abstracting Electricity", section: "Section 13 Theft Act 1968", updated: "02-05-2025", code: "TH68058" },
//     { name: "Bribery", section: "Section 1 Bribery Act 2010", updated: "02-05-2025", code: "CJS Codes" },
//     // ... keep the rest
//   ];

//   const [search, setSearch] = useState("");

//   // 🔍 Filter data based on search
//   const filteredData = dummyData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()) || item.section.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase())
//   );

//   // Group by first letter after filtering
//   const sections = Object.values(
//     filteredData
//       .sort((a, b) => a.name.localeCompare(b.name))
//       .reduce((acc, item) => {
//         const letter = item.name[0].toUpperCase();
//         if (!acc[letter]) acc[letter] = { title: letter, data: [] };
//         acc[letter].data.push(item);
//         return acc;
//       }, {})
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       {/* 🔍 Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search..."
//         value={search}
//         onChangeText={setSearch}
//       />

//       <SectionList
//         ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
//         sections={sections}
//         keyExtractor={(item, index) => item.name + index}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
//               <View style={{ flex: 1 }}>
//                 <Text numberOfLines={2} style={{ color: "#4d6fa9", fontWeight: "bold" }}>
//                   {item.name}
//                 </Text>
//                 <Text numberOfLines={2} style={styles.section}>
//                   {item.section}
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "row", gap: 9, padding: 5 }}>
//                 <Icon size={20} color="#c68529" name="star" />
//                 <Icon size={20} color="black" name="paperclip" />
//               </View>
//             </View>

//             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//               <View style={styles.dateBox}>
//                 <Text style={{ color: "white" }}>date</Text>
//               </View>
//               <LinearGradient
//                 colors={["#4975d9", "#95b3f0", "#4d6fa9"]}
//                 style={styles.gradientBox}
//               >
//                 <Text style={styles.gradientText}>{item.code}</Text>
//               </LinearGradient>
//             </View>
//           </View>
//         )}
//         renderSectionHeader={({ section: { title } }) => (
//           <View style={styles.header}>
//             <Text style={{ color: "white" }}>{title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default Product;

// const styles = StyleSheet.create({
//   searchBar: {
//     height: 45,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     margin: 10,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: "#fff",
//   },
//   item: {
//     flex: 1,
//     borderBottomLeftRadius: 10,
//     borderBottomEndRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#E1ECFD",
//     borderWidth: 1,
//     borderColor: "grey",
//     elevation: 5,
//     justifyContent: "space-evenly",
//     margin: 3,
//   },
//   section: {
//     color: "grey",
//   },
//   dateBox: {
//     width: "35%",
//     height: 30,
//     backgroundColor: "#4d6fa9",
//     borderTopEndRadius: 6,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   gradientBox: {
//     width: "20%",
//     height: 30,
//     borderTopLeftRadius: 6,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   gradientText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 12,
//     fontStyle: "italic",
//   },
//   header: {
//     justifyContent: "center",
//     backgroundColor: "#4d6fa9",
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
// });








// import { StyleSheet, Text, View, SectionList, TextInput } from 'react-native';
// import React, { useEffect } from 'react';
// import Icon from "react-native-vector-icons/Feather"
// import LinearGradient from 'react-native-linear-gradient';
// import { useState } from 'react';
// import searchIcon from 'react-native-vector-icons/MaterialIcons';
// const Product = ({ search }) => {

//     const [search, setSearch] = useState("");
//     const [searchData, setSearchData] = useState([]);


//     const dummyData = [
//         { name: "Absconding from Dutyekgrekgefgmg buajbdadajksbajjksf ajk ja jf aj fjHYJTJTJTJTEWRWRWRWRWREWRWRJTJTJFDSFFFSSFFSFSFSFDFFSFSa fja ja jsja jfdsjfbjdsjkbvjzjcjdsjfbjfkj", section: "Section 15 - Armed Forces Act 2006", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Abuse of Position", section: "Section 4 Fraud Act 2006ghffhgfhfhfhfhfhfhfhfhfhfghgfdffffffffffffffffffffffdbcvdgdgdfgdgdgdgdsfdsfsfsfdsfsfsfsfsdfadfsswfasfsdfsfsfdsfgdfgdfgdgdgdgddfgssgsfsfffffffff", updated: "02-05-2025", code: "PRO" },
//         { name: "Abstracting Electricity", section: "Section 13 Theft Act 1968", updated: "02-05-2025", code: "TH68058" },
//         { name: "Acquisition, Use and Possession", section: "Section 329 Proceeds of Crime Act 2002", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Bribery", section: "Section 1 Bribery Act 2010", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Blackmail", section: "Section 21 Theft Act 1968", updated: "02-05-2025", code: "BLK021" },
//         { name: "Breach of the Peace", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Burglary", section: "Section 9 Theft Act 1968", updated: "02-05-2025", code: "BUR123" },
//         { name: "Computer Misuse", section: "Section 1 Computer Misuse Act 1990", updated: "02-05-2025", code: "ITX009" },
//         { name: "Cyber Fraud", section: "Computer Misuse Act 1990", updated: "02-05-2025", code: "CYF990" },
//         { name: "Child Exploitation", section: "Section 48 Sexual Offences Act 2003", updated: "02-05-2025", code: "CHILDX" },
//         { name: "Corporate Manslaughter", section: "Corporate Manslaughter and Corporate Homicide Act 2007", updated: "02-05-2025", code: "CORP07" },
//         { name: "Criminal Trespass", section: "Section 9 Criminal Law Act 1977", updated: "02-05-2025", code: "CTRS77" },
//         { name: "Driving Under Influence", section: "Section 5 Road Traffic Act 1988", updated: "02-05-2025", code: "DUI881" },
//         { name: "Dangerous Driving", section: "Section 2 Road Traffic Act 1988", updated: "02-05-2025", code: "TRF201" },
//         { name: "Data Protection Breach", section: "Data Protection Act 2018", updated: "02-05-2025", code: "DPA18" },
//         { name: "Domestic Abuse", section: "Domestic Abuse Act 2021", updated: "02-05-2025", code: "DOM999" },
//         { name: "Escape from Custody", section: "Section 39 Prison Act 1952", updated: "02-05-2025", code: "ESC852" },
//         { name: "Environmental Crime", section: "Environmental Protection Act 1990", updated: "02-05-2025", code: "ENV990" },
//         { name: "Fraud by False Representation", section: "Section 2 Fraud Act 2006", updated: "02-05-2025", code: "FRD102" },
//         { name: "Fraud by Failing to Disclose", section: "Section 3 Fraud Act 2006", updated: "02-05-2025", code: "FRD103" },
//         { name: "Forgery and Counterfeiting", section: "Section 1 Forgery and Counterfeiting Act 1981", updated: "02-05-2025", code: "PRO" },
//         { name: "Firearms Trafficking", section: "Firearms Act 1968", updated: "02-05-2025", code: "FTR88" },
//         { name: "Gross Negligence Manslaughter", section: "Common Law", updated: "02-05-2025", code: "GNM77" },
//         { name: "Gang-Related Violence", section: "Serious Crime Act 2007", updated: "02-05-2025", code: "GANG77" },
//         { name: "Handling Stolen Goods", section: "Section 22 Theft Act 1968", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Harassment", section: "Section 2 Protection from Harassment Act 1997", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Human Trafficking", section: "Section 2 Modern Slavery Act 2015", updated: "02-05-2025", code: "TRAFF23" },
//         { name: "Homicide", section: "Common Law", updated: "02-05-2025", code: "HOM001" },
//         { name: "Identity Theft", section: "Identity Documents Act 2010", updated: "02-05-2025", code: "ID2010" },
//         { name: "Immigration Offence", section: "Immigration Act 1971", updated: "02-05-2025", code: "IMM71" },
//         { name: "Insider Trading", section: "Financial Services Act 2012", updated: "02-05-2025", code: "INS001" },
//         { name: "Joint Enterprise Offence", section: "Common Law", updated: "02-05-2025", code: "JE001" },
//         { name: "Judicial Misconduct", section: "Common Law", updated: "02-05-2025", code: "JUD999" },
//         { name: "Kidnapping", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Knife Crime", section: "Offensive Weapons Act 2019", updated: "02-05-2025", code: "KNF019" },
//         { name: "Larceny", section: "Theft Act 1968", updated: "02-05-2025", code: "LRC123" },
//         { name: "Loan Fraud", section: "Fraud Act 2006", updated: "02-05-2025", code: "LNFR06" },
//         { name: "Murder", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Manslaughter", section: "Common Law", updated: "02-05-2025", code: "HOM002" },
//         { name: "Money Laundering", section: "Proceeds of Crime Act 2002", updated: "02-05-2025", code: "POCA01" },
//         { name: "Negligence Causing Death", section: "Common Law", updated: "02-05-2025", code: "NEGL01" },
//         { name: "Obstruction of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Obstructing Police", section: "Section 89 Police Act 1996", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Perverting the Course of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Possession of Firearms", section: "Section 1 Firearms Act 1968", updated: "02-05-2025", code: "FIRE987" },
//         { name: "Public Order Offence", section: "Section 5 Public Order Act 1986", updated: "02-05-2025", code: "PO1986" },
//         { name: "Riot", section: "Section 1 Public Order Act 1986", updated: "02-05-2025", code: "RIOT001" },
//         { name: "Rape", section: "Section 1 Sexual Offences Act 2003", updated: "02-05-2025", code: "SOA1" },
//         { name: "Reckless Damage", section: "Section 1 Criminal Damage Act 1971", updated: "02-05-2025", code: "DAM101" },
//         { name: "Stalking", section: "Section 2A Protection from Harassment Act 1997", updated: "02-05-2025", code: "STK444" },
//         { name: "Smuggling", section: "Customs and Excise Management Act 1979", updated: "02-05-2025", code: "SMUG79" },
//     ];


//     const sections = Object.values(
//         searchData
//             .sort((a, b) => a.name.localeCompare(b.name))
//             .reduce((acc, item) => {
//                 const letter = item.name[0].toUpperCase();
//                 if (!acc[letter]) { acc[letter] = { title: letter, data: [] } }
//                 acc[letter].data.push(item);
//                 return acc;
//             }, {})
//     );
//     useEffect(() => {
//         setSearchData(dummyData)
//     }, [])

//     const handleSearch = (text) => {
//         setSearch(text);
//         if (text) {
//             const filtered = dummyData.filter(
//                 (item) =>
//                     item.name.toLowerCase().includes(text.toLowerCase()) || item.section.toLowerCase().includes(text.toLowerCase()) || item.code.toLowerCase().includes(text.toLowerCase())
//             );
//             setSearchData(filtered)
//         } else {
//             setSearchData(dummyData)
//         }
//     }



//     return (


//         <View style={{ flex: 1 }}>
//             <View>
//                 <Icon name='search' size={25} color="grey" style={{ position: "absolute", top: 9, left: 7, zIndex: 1 }} />
//                 <TextInput
//                     style={styles.searchBar}
//                     placeholder="Search..."
//                     value={search}
//                     onChangeText={(text) => handleSearch(text)}
//                 />

//             </View>


//             <SectionList
//                 ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
//                 sections={sections}
//                 keyExtractor={(item, index) => item.name + index}
//                 renderItem={({ item }) => (
//                     <View style={{ flex: 1, }}>

//                         <View style={styles.item}>
//                             <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
//                                 <View style={{ flex: 1 }}>
//                                     <Text numberOfLines={2} style={{ color: "#4d6fa9", fontWeight: "bold" }}>{item.name}</Text>
//                                     <Text numberOfLines={2} style={styles.section}>{item.section}</Text>
//                                 </View>
//                                 <View style={{ flexDirection: "row", gap: 9, ackgroundColor: "yellow", padding: 5 }}>
//                                     <Icon size={20} color="#c68529" name="star" />
//                                     <Icon size={20} color="black" name="paperclip" />
//                                 </View>

//                             </View>


//                             <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
//                                 <View style={{ width: "35%", height: 30, backgroundColor: "#4d6fa9", borderTopEndRadius: 6, justifyContent: "center", alignItems: "center", }}>
//                                     <Text style={{ color: "white" }}>
//                                         date
//                                     </Text>
//                                 </View>
//                                 <LinearGradient
//                                     colors={["#4975d9", "#95b3f0", "#4d6fa9"]} style={{ width: "20%", height: 30, backgroundColor: "#4d6fa9", borderTopLeftRadius: 6, justifyContent: "center", alignItems: "center" }}>
//                                     <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, fontStyle: "italic" }}>
//                                         PRO
//                                     </Text>

//                                 </LinearGradient>
//                             </View>
//                         </View>

//                     </View>


//                 )}
//                 renderSectionHeader={({ section: { title } }) => (

//                     <View style={{ justifyContent: "center", backgroundColor: "#4d6fa9", paddingVertical: 10, paddingHorizontal: 10 }}>
//                         <Text style={{ color: "white" }}>{title}</Text>
//                     </View>

//                 )}
//                 ListEmptyComponent={() => (
//                     <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
//                         <Text>No results found</Text>
//                     </View>
//                 )}
//                 contentContainerStyle={{ flexGrow: 1 }}

//             />
//         </View>
//     );
// };

// export default Product;

// const styles = StyleSheet.create({

//     item: {
//         flex: 1,
//         borderBottomLeftRadius: 10,
//         borderBottomEndRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: "#E1ECFD",
//         borderWidth: 1,
//         borderColor: "grey",
//         elevation: 5,
//         justifyContent: "space-evenly",
//         margin: 3,

//     },
//     section: {
//         color: "grey",
//     },
//     searchBar: {
//         height: 45,
//         borderWidth: 1,
//         borderColor: "#ccc",
//         paddingHorizontal: 40,
//         fontSize: 16,
//         backgroundColor: "#fff",
//     },
// });


// import { StyleSheet, Text, View, SectionList } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Icon from "react-native-vector-icons/Feather";
// import LinearGradient from 'react-native-linear-gradient';

// const Product = ({ search }) => {
//   const [searchData, setSearchData] = useState([]);


//     const dummyData = [
//         { name: "Absconding from Dutyekgrekgefgmg buajbdadajksbajjksf ajk ja jf aj fjHYJTJTJTJTEWRWRWRWRWREWRWRJTJTJFDSFFFSSFFSFSFSFDFFSFSa fja ja jsja jfdsjfbjdsjkbvjzjcjdsjfbjfkj", section: "Section 15 - Armed Forces Act 2006", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Abuse of Position", section: "Section 4 Fraud Act 2006ghffhgfhfhfhfhfhfhfhfhfhfghgfdffffffffffffffffffffffdbcvdgdgdfgdgdgdgdsfdsfsfsfdsfsfsfsfsdfadfsswfasfsdfsfsfdsfgdfgdfgdgdgdgddfgssgsfsfffffffff", updated: "02-05-2025", code: "PRO" },
//         { name: "Abstracting Electricity", section: "Section 13 Theft Act 1968", updated: "02-05-2025", code: "TH68058" },
//         { name: "Acquisition, Use and Possession", section: "Section 329 Proceeds of Crime Act 2002", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Bribery", section: "Section 1 Bribery Act 2010", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Blackmail", section: "Section 21 Theft Act 1968", updated: "02-05-2025", code: "BLK021" },
//         { name: "Breach of the Peace", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Burglary", section: "Section 9 Theft Act 1968", updated: "02-05-2025", code: "BUR123" },
//         { name: "Computer Misuse", section: "Section 1 Computer Misuse Act 1990", updated: "02-05-2025", code: "ITX009" },
//         { name: "Cyber Fraud", section: "Computer Misuse Act 1990", updated: "02-05-2025", code: "CYF990" },
//         { name: "Child Exploitation", section: "Section 48 Sexual Offences Act 2003", updated: "02-05-2025", code: "CHILDX" },
//         { name: "Corporate Manslaughter", section: "Corporate Manslaughter and Corporate Homicide Act 2007", updated: "02-05-2025", code: "CORP07" },
//         { name: "Criminal Trespass", section: "Section 9 Criminal Law Act 1977", updated: "02-05-2025", code: "CTRS77" },
//         { name: "Driving Under Influence", section: "Section 5 Road Traffic Act 1988", updated: "02-05-2025", code: "DUI881" },
//         { name: "Dangerous Driving", section: "Section 2 Road Traffic Act 1988", updated: "02-05-2025", code: "TRF201" },
//         { name: "Data Protection Breach", section: "Data Protection Act 2018", updated: "02-05-2025", code: "DPA18" },
//         { name: "Domestic Abuse", section: "Domestic Abuse Act 2021", updated: "02-05-2025", code: "DOM999" },
//         { name: "Escape from Custody", section: "Section 39 Prison Act 1952", updated: "02-05-2025", code: "ESC852" },
//         { name: "Environmental Crime", section: "Environmental Protection Act 1990", updated: "02-05-2025", code: "ENV990" },
//         { name: "Fraud by False Representation", section: "Section 2 Fraud Act 2006", updated: "02-05-2025", code: "FRD102" },
//         { name: "Fraud by Failing to Disclose", section: "Section 3 Fraud Act 2006", updated: "02-05-2025", code: "FRD103" },
//         { name: "Forgery and Counterfeiting", section: "Section 1 Forgery and Counterfeiting Act 1981", updated: "02-05-2025", code: "PRO" },
//         { name: "Firearms Trafficking", section: "Firearms Act 1968", updated: "02-05-2025", code: "FTR88" },
//         { name: "Gross Negligence Manslaughter", section: "Common Law", updated: "02-05-2025", code: "GNM77" },
//         { name: "Gang-Related Violence", section: "Serious Crime Act 2007", updated: "02-05-2025", code: "GANG77" },
//         { name: "Handling Stolen Goods", section: "Section 22 Theft Act 1968", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Harassment", section: "Section 2 Protection from Harassment Act 1997", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Human Trafficking", section: "Section 2 Modern Slavery Act 2015", updated: "02-05-2025", code: "TRAFF23" },
//         { name: "Homicide", section: "Common Law", updated: "02-05-2025", code: "HOM001" },
//         { name: "Identity Theft", section: "Identity Documents Act 2010", updated: "02-05-2025", code: "ID2010" },
//         { name: "Immigration Offence", section: "Immigration Act 1971", updated: "02-05-2025", code: "IMM71" },
//         { name: "Insider Trading", section: "Financial Services Act 2012", updated: "02-05-2025", code: "INS001" },
//         { name: "Joint Enterprise Offence", section: "Common Law", updated: "02-05-2025", code: "JE001" },
//         { name: "Judicial Misconduct", section: "Common Law", updated: "02-05-2025", code: "JUD999" },
//         { name: "Kidnapping", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Knife Crime", section: "Offensive Weapons Act 2019", updated: "02-05-2025", code: "KNF019" },
//         { name: "Larceny", section: "Theft Act 1968", updated: "02-05-2025", code: "LRC123" },
//         { name: "Loan Fraud", section: "Fraud Act 2006", updated: "02-05-2025", code: "LNFR06" },
//         { name: "Murder", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Manslaughter", section: "Common Law", updated: "02-05-2025", code: "HOM002" },
//         { name: "Money Laundering", section: "Proceeds of Crime Act 2002", updated: "02-05-2025", code: "POCA01" },
//         { name: "Negligence Causing Death", section: "Common Law", updated: "02-05-2025", code: "NEGL01" },
//         { name: "Obstruction of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Obstructing Police", section: "Section 89 Police Act 1996", updated: "02-05-2025", code: "CJS Codes" },
//         { name: "Perverting the Course of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
//         { name: "Possession of Firearms", section: "Section 1 Firearms Act 1968", updated: "02-05-2025", code: "FIRE987" },
//         { name: "Public Order Offence", section: "Section 5 Public Order Act 1986", updated: "02-05-2025", code: "PO1986" },
//         { name: "Riot", section: "Section 1 Public Order Act 1986", updated: "02-05-2025", code: "RIOT001" },
//         { name: "Rape", section: "Section 1 Sexual Offences Act 2003", updated: "02-05-2025", code: "SOA1" },
//         { name: "Reckless Damage", section: "Section 1 Criminal Damage Act 1971", updated: "02-05-2025", code: "DAM101" },
//         { name: "Stalking", section: "Section 2A Protection from Harassment Act 1997", updated: "02-05-2025", code: "STK444" },
//         { name: "Smuggling", section: "Customs and Excise Management Act 1979", updated: "02-05-2025", code: "SMUG79" },
//     ];

//   // Load full list at first
//   useEffect(() => {
//     setSearchData(dummyData);
//   }, []);

//   // Filter when search changes
//   useEffect(() => {
//     if (search) {
//       const filtered = dummyData.filter(
//         (item) =>
//           item.name.toLowerCase().includes(search.toLowerCase()) ||
//           item.section.toLowerCase().includes(search.toLowerCase()) ||
//           item.code.toLowerCase().includes(search.toLowerCase())
//       );
//       setSearchData(filtered);
//     } else {
//       setSearchData(dummyData);
//     }
//   }, [search]);

//   // Grouping by first letter
//   const sections = Object.values(
//     searchData
//       .sort((a, b) => a.name.localeCompare(b.name))
//       .reduce((acc, item) => {
//         const letter = item.name[0].toUpperCase();
//         if (!acc[letter]) acc[letter] = { title: letter, data: [] };
//         acc[letter].data.push(item);
//         return acc;
//       }, {})
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <SectionList
//         ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
//         sections={sections}
//         keyExtractor={(item, index) => item.name + index}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
//               <View style={{ flex: 1 }}>
//                 <Text numberOfLines={2} style={{ color: "#4d6fa9", fontWeight: "bold" }}>
//                   {item.name}
//                 </Text>
//                 <Text numberOfLines={2} style={styles.section}>
//                   {item.section}
//                 </Text>
//               </View>
//               <View style={{ flexDirection: "row", gap: 9, padding: 5 }}>
//                 <Icon size={20} color="#c68529" name="star" />
//                 <Icon size={20} color="black" name="paperclip" />
//               </View>
//             </View>

//             <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//               <View
//                 style={{
//                   width: "35%",
//                   height: 30,
//                   backgroundColor: "#4d6fa9",
//                   borderTopEndRadius: 6,
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text style={{ color: "white" }}>{item.updated}</Text>
//               </View>
//               <LinearGradient
//                 colors={["#4975d9", "#95b3f0", "#4d6fa9"]}
//                 style={{
//                   width: "20%",
//                   height: 30,
//                   borderTopLeftRadius: 6,
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: "white",
//                     fontWeight: "bold",
//                     fontSize: 12,
//                     fontStyle: "italic",
//                   }}
//                 >
//                   {item.code}
//                 </Text>
//               </LinearGradient>
//             </View>
//           </View>
//         )}
//         renderSectionHeader={({ section: { title } }) => (
//           <View
//             style={{
//               justifyContent: "center",
//               backgroundColor: "#4d6fa9",
//               paddingVertical: 10,
//               paddingHorizontal: 10,
//             }}
//           >
//             <Text style={{ color: "white" }}>{title}</Text>
//           </View>
//         )}
//         ListEmptyComponent={() => (
//           <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <Text>No results found</Text>
//           </View>
//         )}
//         contentContainerStyle={{ flexGrow: 1 }}
//       />
//     </View>
//   );
// };

// export default Product;

// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     borderBottomLeftRadius: 10,
//     borderBottomEndRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#E1ECFD",
//     borderWidth: 1,
//     borderColor: "grey",
//     elevation: 5,
//     justifyContent: "space-evenly",
//     margin: 3,
//   },
//   section: {
//     color: "grey",
//   },
// });



import { StyleSheet, Text, View, SectionList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';

const Product = ({ search, sortBy }) => {
    const [searchData, setSearchData] = useState([]);


    const dummyData = [

        { name: "Absconding from Dutyekgrekgefgmg buajbdadajksbajjksf ajk ja jf aj fjHYJTJTJTJTEWRWRWRWRWREWRWRJTJTJFDSFFFSSFFSFSFSFDFFSFSa fja ja jsja jfdsjfbjdsjkbvjzjcjdsjfbjfkj", section: "Section 15 - Armed Forces Act 2006", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Abuse of Position", section: "Section 4 Fraud Act 2006ghffhgfhfhfhfhfhfhfhfhfhfghgfdffffffffffffffffffffffdbcvdgdgdfgdgdgdgdsfdsfsfsfdsfsfsfsfsdfadfsswfasfsdfsfsfdsfgdfgdfgdgdgdgddfgssgsfsfffffffff", updated: "02-05-2025", code: "PRO" },
        { name: "Abstracting Electricity", section: "Section 13 Theft Act 1968", updated: "02-05-2025", code: "TH68058" },
        { name: "Acquisition, Use and Possession", section: "Section 329 Proceeds of Crime Act 2002", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Bribery", section: "Section 1 Bribery Act 2010", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Blackmail", section: "Section 21 Theft Act 1968", updated: "02-05-2025", code: "BLK021" },
        { name: "Breach of the Peace", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Burglary", section: "Section 9 Theft Act 1968", updated: "02-05-2025", code: "BUR123" },
        { name: "Computer Misuse", section: "Section 1 Computer Misuse Act 1990", updated: "02-05-2025", code: "ITX009" },
        { name: "Cyber Fraud", section: "Computer Misuse Act 1990", updated: "02-05-2025", code: "CYF990" },
        { name: "Child Exploitation", section: "Section 48 Sexual Offences Act 2003", updated: "02-05-2025", code: "CHILDX" },
        { name: "Corporate Manslaughter", section: "Corporate Manslaughter and Corporate Homicide Act 2007", updated: "02-05-2025", code: "CORP07" },
        { name: "Criminal Trespass", section: "Section 9 Criminal Law Act 1977", updated: "02-05-2025", code: "CTRS77" },
        { name: "Driving Under Influence", section: "Section 5 Road Traffic Act 1988", updated: "02-05-2025", code: "DUI881" },
        { name: "Dangerous Driving", section: "Section 2 Road Traffic Act 1988", updated: "02-05-2025", code: "TRF201" },
        { name: "Data Protection Breach", section: "Data Protection Act 2018", updated: "02-05-2025", code: "DPA18" },
        { name: "Domestic Abuse", section: "Domestic Abuse Act 2021", updated: "02-05-2025", code: "DOM999" },
        { name: "Escape from Custody", section: "Section 39 Prison Act 1952", updated: "02-05-2025", code: "ESC852" },
        { name: "Environmental Crime", section: "Environmental Protection Act 1990", updated: "02-05-2025", code: "ENV990" },
        { name: "Fraud by False Representation", section: "Section 2 Fraud Act 2006", updated: "02-05-2025", code: "FRD102" },
        { name: "Fraud by Failing to Disclose", section: "Section 3 Fraud Act 2006", updated: "02-05-2025", code: "FRD103" },
        { name: "Forgery and Counterfeiting", section: "Section 1 Forgery and Counterfeiting Act 1981", updated: "02-05-2025", code: "PRO" },
        { name: "Firearms Trafficking", section: "Firearms Act 1968", updated: "02-05-2025", code: "FTR88" },
        { name: "Gross Negligence Manslaughter", section: "Common Law", updated: "02-05-2025", code: "GNM77" },
        { name: "Gang-Related Violence", section: "Serious Crime Act 2007", updated: "02-05-2025", code: "GANG77" },
        { name: "Handling Stolen Goods", section: "Section 22 Theft Act 1968", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Harassment", section: "Section 2 Protection from Harassment Act 1997", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Human Trafficking", section: "Section 2 Modern Slavery Act 2015", updated: "02-05-2025", code: "TRAFF23" },
        { name: "Homicide", section: "Common Law", updated: "02-05-2025", code: "HOM001" },
        { name: "Identity Theft", section: "Identity Documents Act 2010", updated: "02-05-2025", code: "ID2010" },
        { name: "Immigration Offence", section: "Immigration Act 1971", updated: "02-05-2025", code: "IMM71" },
        { name: "Insider Trading", section: "Financial Services Act 2012", updated: "02-05-2025", code: "INS001" },
        { name: "Joint Enterprise Offence", section: "Common Law", updated: "02-05-2025", code: "JE001" },
        { name: "Judicial Misconduct", section: "Common Law", updated: "02-05-2025", code: "JUD999" },
        { name: "Kidnapping", section: "Common Law", updated: "02-05-2025", code: "PRO" },
        { name: "Knife Crime", section: "Offensive Weapons Act 2019", updated: "02-05-2025", code: "KNF019" },
        { name: "Larceny", section: "Theft Act 1968", updated: "02-05-2025", code: "LRC123" },
        { name: "Loan Fraud", section: "Fraud Act 2006", updated: "02-05-2025", code: "LNFR06" },
        { name: "Murder", section: "Common Law", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Manslaughter", section: "Common Law", updated: "02-05-2025", code: "HOM002" },
        { name: "Money Laundering", section: "Proceeds of Crime Act 2002", updated: "02-05-2025", code: "POCA01" },
        { name: "Negligence Causing Death", section: "Common Law", updated: "02-05-2025", code: "NEGL01" },
        { name: "Obstruction of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
        { name: "Obstructing Police", section: "Section 89 Police Act 1996", updated: "02-05-2025", code: "CJS Codes" },
        { name: "Perverting the Course of Justice", section: "Common Law", updated: "02-05-2025", code: "PRO" },
        { name: "Possession of Firearms", section: "Section 1 Firearms Act 1968", updated: "02-05-2025", code: "FIRE987" },
        { name: "Public Order Offence", section: "Section 5 Public Order Act 1986", updated: "02-05-2025", code: "PO1986" },
        { name: "Riot", section: "Section 1 Public Order Act 1986", updated: "02-05-2025", code: "RIOT001" },
        { name: "Rape", section: "Section 1 Sexual Offences Act 2003", updated: "02-05-2025", code: "SOA1" },
        { name: "Reckless Damage", section: "Section 1 Criminal Damage Act 1971", updated: "02-05-2025", code: "DAM101" },
        { name: "Stalking", section: "Section 2A Protection from Harassment Act 1997", updated: "02-05-2025", code: "STK444" },
        { name: "Smuggling", section: "Customs and Excise Management Act 1979", updated: "02-05-2025", code: "SMUG79" },

    ];

    // Load full list at first
    useEffect(() => {
        setSearchData(dummyData);
    }, []);

    // Filter when search changes
    useEffect(() => {
        if (search) {
            const filtered = dummyData.filter(
                (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.section.toLowerCase().includes(search.toLowerCase()) ||
                    item.code.toLowerCase().includes(search.toLowerCase())
            );
            setSearchData(filtered);
        } else {
            setSearchData(dummyData);
        }
    }, [search]);

    // Grouping + Sorting dynamically
    const sections = Object.values(
        searchData
            .sort((a, b) => a[sortBy].localeCompare(b[sortBy])) // 👈 sort by name OR section
            .reduce((acc, item) => {
                const letter = item[sortBy][0].toUpperCase(); // group by first letter of chosen field
                if (!acc[letter]) acc[letter] = { title: letter, data: [] };
                acc[letter].data.push(item);
                return acc;
            }, {})
    );

    return (
        <View style={{ flex: 1 }}>
            {/* 🔘 Sorting Buttons */}

            <SectionList
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                sections={sections}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 5 }}>
                            <View style={{ flex: 1 }}>
                                <Text numberOfLines={2} style={{ color: "#4d6fa9", fontWeight: "bold" }}>
                                    {item.name}
                                </Text>
                                <Text numberOfLines={2} style={styles.section}>
                                    {item.section}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", gap: 9, padding: 5 }}>
                                <Icon size={20} color="#c68529" name="star" />
                                <Icon
                                    name="paperclip"
                                    size={20}
                                    color="#4d6fa9"
                                    style={{

                                        textShadowRadius: 1,

                                    }}
                                />

                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View
                                style={{
                                    width: "35%",
                                    height: 30,
                                    backgroundColor: "#4d6fa9",
                                    borderTopEndRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{ color: "white" }}>{item.updated}</Text>
                            </View>
                            <LinearGradient
                                colors={["#4975d9", "#95b3f0", "#4d6fa9"]}
                                style={{
                                    width: "20%",
                                    height: 30,
                                    borderTopLeftRadius: 6,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, fontStyle: "italic" }}>
                                    {item.code}
                                </Text>
                            </LinearGradient>
                        </View>
                    </View>
                )}
                renderSectionHeader={({ section, index }) => (
                    <View style={{
                        // justifyContent:"center",
                        backgroundColor: "#4d6fa9",
                        paddingVertical: 10,   // same inside spacing as items
                        paddingHorizontal: 12,
                        marginVertical:10
                   
                    }}>
                        <Text style={{ color: "white" }}>{section.title}</Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text>No results found</Text>
                    </View>
                )}
                contentContainerStyle={{ flexGrow: 1 }}
            />
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10,
        overflow: "hidden",
        backgroundColor: "#E1ECFD",
        borderWidth: 1,
        borderColor: "grey",
        elevation: 5,
        marginHorizontal: 8,




    },
    section: {
        color: "grey",
    },
});
