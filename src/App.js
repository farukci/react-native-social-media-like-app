import React from "react";
import { SafeAreaView, View, Text, TextInput, FlatList, } from "react-native";

import mediaData from "./media.json";

import Card from "./components/Card";

const App = () => {



  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={{
          textAlign: "center", 
          margin: 10, 
          padding: 10,
          fontWeight: "bold", 
          fontSize: 40, 
          color: "purple", 
          fontFamily: "baskerville",
          backgroundColor: "lightgrey",
          borderRadius:10,
          letterSpacing: 3,
          }}>nabtın</Text>
        <FlatList
          keyExtractor={({id}, index) => id}
          data={mediaData}
          renderItem={({item}) => (<Card value={item}/>)}
        />
      </View>
    </SafeAreaView>

  )
}

export default App;