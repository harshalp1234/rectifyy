// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const Custombutton = ({onPress,title}) => {
//   return (
//     <View>
//       <TouchableOpacity onPress={onPress} style={styles.button}>
//         <Text style={{color:"white",textAlign:"center",fontWeight:"bold",width:"100%"}}>{title}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Custombutton

// const styles = StyleSheet.create({
//   button:{backgroundColor:"#4b80daff",borderRadius:20,color:"white",paddingVertical:12,marginTop:20,marginHorizontal:10}
// })

// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import LinearGradient from 'react-native-linear-gradient'

// const Custombutton = ({onPress,title,style}) => {
//   return (
//     <View>
//       <TouchableOpacity onPress={onPress} >
//       <LinearGradient style={[styles.linearGradient ,style]}  colors={['#97ADD4', '#4677CB', '#3F6FBF']} >
//         <Text style={{color:"white",fontWeight:"bold"}} >
//           {title}
//         </Text>
//       </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Custombutton

// const styles = StyleSheet.create({
 
//   linearGradient:{
//     paddingVertical: 14,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 15,   
//     borderRadius: 8,        
//     width: "90%",           
//     alignSelf: "center",
//     marginTop: 20,
// }})

// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import LinearGradient from "react-native-linear-gradient";

// const Custombutton = ({ onPress, title, style }) => {
//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
//       <LinearGradient
//         colors={["#97ADD4", "#4677CB", "#3F6FBF"]}
//         style={[styles.linearGradient, style]}   
//       >
//         <TouchableOpacity style={styles.linearGradient}>
//         <Text style={styles.buttonText}>{title}</Text>
//         </TouchableOpacity>
        
//       </LinearGradient>

//     </TouchableOpacity>
    
//   );
// };

// export default Custombutton;

// const styles = StyleSheet.create({
//   linearGradient: {
//     borderRadius: 12,
//     marginHorizontal: 20,
//     alignItems: "center",
//     paddingVertical:20,
//     paddingHorizontal:30
 
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });


import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const Custombutton = ({ onPress, title, style, textStyle }) => {
  return (
    <LinearGradient
      colors={["#97ADD4", "#4677CB", "#3F6FBF"]}
     
      style={[styles.linearGradient, style]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.buttonContainer}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Custombutton;

const styles = StyleSheet.create({
  linearGradient: {
    marginHorizontal: 20,
    borderRadius: 13,
    shadowRadius: 3,
 
  },
  buttonContainer: {
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

