import {
    SafeAreaView,
    Image,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    FlatList,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import Ionicons from "react-native-vector-icons/Ionicons";
  
  export default function PodCastScreen({ navigation }) {
    const [tags, setTags] = useState([
      { id: "1", label: "All" },
      { id: "2", label: "Life" },
      { id: "3", label: "Tech" },
      { id: "4", label: "Comedy" },
    ]);
    // const [selectedTagId, setSelectedTagId] = useState(null);

    const renderTag = ({ item }) => (
      <TouchableOpacity
        style={[
          styles.tagButton,
          item.id === "1" && styles.tagButtonChoice,
        ]}
        // onPress={() => setSelectedTagId(item.id)}
      >
        <Text
          style={[
            styles.tagText,
            item.id === "1" && styles.tagChoice,
          ]}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
    
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.searchSection}>
          <Text style={styles.welcome}>Enjoying The Moment</Text>
          <View style={styles.searchSection1}>
            <Ionicons
              style={styles.searchIcon}
              name="ios-search"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="Search the podcast here ..."
            />
          </View>

          <View style={styles.top}>
            <FlatList
              data={tags}
              horizontal={true}
              renderItem={renderTag}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.tagContainer}
            />
          </View>

          <View style={styles.top}>
            <Text style={styles.trend}>Trending</Text>
          </View>

          <View style={styles.podcast}>
            <View style={styles.trendingContainer}>
              <View style={styles.trendingColumn}>
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                  <Image style={styles.logo} source={require("../../assets/p1.png")} />
                  <Text style={styles.name}>MÂY PodCast</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.trendingColumn}>
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                  <Image style={styles.logo} source={require("../../assets/p2.png")} />
                  <Text style={styles.name}>MÂY PodCast</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.trendingContainer}>
              <View style={styles.trendingColumn}>
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                  <Image style={styles.logo} source={require("../../assets/p1.png")} />
                  <Text style={styles.name}>MÂY PodCast</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.trendingColumn}>
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                  <Image style={styles.logo} source={require("../../assets/p2.png")} />
                  <Text style={styles.name}>MÂY PodCast</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
        </View>

        
  
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    searchSection: {
      position: "absolute",
      top: 16 + StatusBar.currentHeight,
      left: 16,
      right: 16,
      flex: 1,
    },
  
    searchSection1: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 8,
      height: 58,
      width: "100%",
      borderColor: "#F5C0D2",
      backgroundColor: "white",
      marginTop: 10,
    },
    searchIcon: {
      padding: 10,
    },
  
    input: {
      flex: 1,
    },
    welcome: {
      fontWeight: "bold",
      fontSize: 18,
      width: '100%',
      textAlign: "center",
      paddingBottom: 15,
    },
    tagContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    tagButton: {
      backgroundColor: "#F4F3F5",
      borderRadius: 17,
      paddingHorizontal: 20,
      paddingVertical: 8,
      marginHorizontal: 5,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    tagButtonChoice: {
      width: 100,
      backgroundColor: "#FDE1EB",
      borderRadius: 17,
      paddingHorizontal: 20,
      paddingVertical: 8,
      marginHorizontal: 5,
    },
    tagChoice: {
      color: "#C84771",
    },
    tagText: {
      color: "black",
    },        
    top: {
      marginTop: 10,
    },
    trend: {
      fontWeight: "bold",
      fontSize: 35,
    },
    name: {
      fontWeight: "bold",
      fontSize: 15,
    },
    podcast: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    trendingContainer: {
      marginTop: 20,
      flexDirection: "row",
    },
    trendingColumn: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    
  });
  