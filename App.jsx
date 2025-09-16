// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Appnavigator from './src/navigation/Appnavigator'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import Tabnavigator from './src/navigation/Tabnavigator'
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import Appnav from './src/stacks/Appnav'
// import { Provider } from 'react-redux'
// import { store } from './src/store/store'
// import persistStore from 'redux-persist/es/persistStore'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor } from './src/store/store'
// let persistor = persistStore(store)
// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate persistor={persistor}>
//               <Appnav />
//               <Toast />
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//     //


//   )
// }

// export default App

// const styles = StyleSheet.create({})




// import { StyleSheet } from 'react-native'
// import React from 'react'
// import Appnav from './src/stacks/Appnav'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Provider } from 'react-redux'
// import { store, persistor } from './src/store/store' // ✅ import both together
// import { PersistGate } from 'redux-persist/integration/react'
// import { SafeAreaView } from 'react-native'


// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//               <SafeAreaView style={{flex:1}}>
//               <Appnav />
//               <Toast />
//               </SafeAreaView>
             
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


// import { StyleSheet } from 'react-native'
// import React from 'react'
// import Appnav from './src/stacks/Appnav'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { AuthProvider } from './src/context/Authcontext'
// import Toast from 'react-native-toast-message'
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { Provider } from 'react-redux'
// import { store, persistor } from './src/store/store'
// import { PersistGate } from 'redux-persist/integration/react'

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <AuthProvider>
//           <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//                 <Appnav />
//                 <Toast />
//             </PersistGate>
//           </Provider>
//         </AuthProvider>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


import { StyleSheet } from 'react-native'
import React from 'react'
import Appnav from './src/stacks/Appnav'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AuthProvider } from './src/context/Authcontext'
import Toast from 'react-native-toast-message'
import { SafeAreaProvider} from "react-native-safe-area-context";
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaView } from 'react-native'

const App = () => {
  return (

     <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Appnav />           
              <Toast />
            </PersistGate>
          </Provider>
        </AuthProvider>
      </SafeAreaProvider>
     </GestureHandlerRootView>

  )
}

export default App

const styles = StyleSheet.create({})
