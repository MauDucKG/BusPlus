import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Checkbox } from "react-native-paper";
import React, { useState } from "react";
import axios from "axios";

const TASKAPI = "https://apibusplus.onrender.com/task";

export default function Add({navigation}) {
  const [isimportant, setisimportant] = useState(false);
  const [name, setname] = useState("");
  const [loca, setloca] = useState("");
  const [note, setnote] = useState("");

  async function handOnAdd(name, loca, note, isimportant, navigation) {
    try {
      const req = {
        title: name,
        location: loca,
        note: note,
        important: isimportant,
      };
      axios
        .post(TASKAPI, req)
        .then((response) => {
          navigation.navigate("Today")
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      Alert("Lỗi trong khi thêm dữ liệu");
      console.error(error);
      throw error;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <View style={styles.title_t}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#4F4E59" }}>
              Title
            </Text>
          </View>
          <View style={styles.title_b}>
            <TextInput
              style={{ fontSize: 20 }}
              placeholder="Fill in the name of the task"
              onChangeText={(newText) => setname(newText)}
            />
          </View>
        </View>
        <View style={styles.loca}>
          <View style={styles.loca_t}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#7ABEF2" }}>
              Location
            </Text>
          </View>
          <View style={styles.loca_b}>
            <TextInput
              style={{ fontSize: 20 }}
              placeholder="Fill in the location of the task"
              onChangeText={(newText) => setloca(newText)}
            />
          </View>
        </View>
        <View style={styles.note}>
          <View style={styles.note_t}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: "#97E7B9" }}>
              Note
            </Text>
          </View>
          <View style={styles.note_b}>
            <TextInput
              style={{ fontSize: 20 }}
              placeholder="Fill in note"
              multiline={true}
              numberOfLines={4}
              onChangeText={(newText) => setnote(newText)}
            />
          </View>
        </View>
        <View style={styles.imp}>
          <View style={styles.imp_t}>
            <Checkbox
              status={isimportant ? "checked" : "unchecked"}
              onPress={() => {
                setisimportant(!isimportant);
              }}
              color="#C84771"
              style={styles.imp_t_b}
            />
          </View>
          <View style={styles.imp_b}>
            <Text style={{ fontSize: 16 }}>Important</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
          }}
        >
          <TouchableOpacity
            style={styles.sub}
            onPress={() => handOnAdd(name, loca, note, isimportant, navigation)}
          >
            <Text style={{ fontSize: 16, color: "#BC305D" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
  },

  title: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
  },

  title_t: {
    margin: 16,
    marginBottom: 8,
  },

  title_b: {
    marginHorizontal: 16,
    marginBottom: 16,
  },

  loca: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#7ABEF2",
  },

  loca_t: {
    margin: 16,
    marginBottom: 8,
  },

  loca_b: {
    marginHorizontal: 16,
    marginBottom: 16,
  },

  note: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#97E7B9",
  },

  note_t: {
    margin: 16,
    marginBottom: 8,
  },

  note_b: {
    marginHorizontal: 16,
    marginBottom: 16,
  },

  imp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  sub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5C0D2",
    padding: 16,
    width: "30%",
    borderRadius: 8,
  },
});
