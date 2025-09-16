// // for opening the pdf outside the app
// import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import RNFS from 'react-native-fs'
// import FileViewer from 'react-native-file-viewer'

// const Document = () => {
//   const [status, setStatus] = useState("Click to Download");
//   const [filePath, setFilePath] = useState(null);

//   const downloadFile = async () => {
//     const url = "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf";
//     const fileName = `sample_${Date.now()}.pdf`;
//     const destPath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

//     setStatus(<ActivityIndicator size="large" color="#0000ff" />);

//     try {
//       const download = RNFS.downloadFile({
//         fromUrl: url,
//         toFile: destPath,
//       });

//       const result = await download.promise;

//       if (result.statusCode === 200) {
//         setStatus("Downloaded ✅");
//         setFilePath(destPath); // Save file path
//         console.log("File saved to:", destPath);
//       } else {
//         setStatus("Failed!");
//         console.log("Download failed:", result);
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus("Error downloading");
//     }
//   };

//   const viewFile = async () => {
//     if (filePath) {
//       try {
//         await FileViewer.open(filePath, { showOpenWithDialog: true });
//       } catch (err) {
//         console.error("Error opening file:", err);
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ margin: 20 }}>
//         <Text style={{ margin: 10 }}>{typeof status === "string" ? status : ""}</Text>
//         {status === "Downloaded ✅" ? (
//           <Button color="#4d6fa9" title="View PDF" onPress={viewFile} />
//         ) : (
//           <Button color="#4d6fa9" title="Download PDF" onPress={downloadFile} />
//         )}
//         {typeof status !== "string" && status}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Document;


import { 
    ActivityIndicator, 
    Button, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View, 
    Platform 
  } from "react-native";
  import React, { useState } from "react";
  import RNFS from "react-native-fs";
  import FileViewer from "react-native-file-viewer";
  
  const Document = () => {
    const [status, setStatus] = useState("Click to Download");
    const [filePath, setFilePath] = useState(null);
  
    const downloadFile = async () => {
      const url = "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf";
      const fileName = `sample_${Date.now()}.pdf`;
  
      // ✅ Use correct path per platform
      const destPath =
        Platform.OS === "android"
          ? `${RNFS.DownloadDirectoryPath}/${fileName}` // Android public Downloads
          : `${RNFS.DocumentDirectoryPath}/${fileName}`; // iOS app sandbox
  
      setStatus(<ActivityIndicator size="large" color="#0000ff" />);
  
      try {
        const download = RNFS.downloadFile({
          fromUrl: url,
          toFile: destPath,
        });
  
        const result = await download.promise;
  
        if (result.statusCode === 200) {
          setStatus("Downloaded ✅");
          setFilePath(destPath);
          console.log("File saved to:", destPath);
        } else {
          setStatus("Failed!");
          console.log("Download failed:", result);
        }
      } catch (err) {
        console.error(err);
        setStatus("Error downloading");
      }
    };
  
    const viewFile = async () => {
      if (filePath) {
        try {
          await FileViewer.open(filePath, { showOpenWithDialog: true });
        } catch (err) {
          console.error("Error opening file:", err);
        }
      }
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ margin: 20 }}>
          <Text style={{ margin: 10 }}>
            {typeof status === "string" ? status : ""}
          </Text>
          {status === "Downloaded ✅" ? (
            <Button color="#4d6fa9" title="View PDF" onPress={viewFile} />
          ) : (
            <Button color="#4d6fa9" title="Download PDF" onPress={downloadFile} />
          )}
          {typeof status !== "string" && status}
        </View>
      </SafeAreaView>
    );
  };
  
  export default Document;
  