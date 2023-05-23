import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import axios from "axios";

const TASKAPI = "https://apibusplus.onrender.com/task";

const today = new Date();
const day = today.getDate().toString().padStart(2, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const year = today.getFullYear().toString();
const formattedDate = `${day}/${month}/${year}`;

async function getalltask() {
  try {
    const response = await axios.get(TASKAPI);
    return response.data.tasks;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function handOnDelete(_id, navigation) {
  try {
    const req = {
      _id: id,
    };
    axios
      .delete(TASKAPI, req)
      .then((response) => {
        // navigation.navigate("Today");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    Alert("Lỗi trong khi xóa dữ liệu");
    console.error(error);
    throw error;
  }
}

const Task = ({ task, navigation }) => {
  if (task.important)
    return (
      <View style={styles.task2}>
        <TouchableOpacity
          style={styles.task_l}
          onPress={() => navigation.navigate("Edit task", { task })}
        >
          <View style={styles.task_l_name}>
            <Text style={{ fontSize: 24 }}>{task.title}</Text>
          </View>
          <View style={styles.task_l_loca}>
            <Ionicons name="location" size={20} color="#248DDE" />
            <Text style={{ color: "#248DDE", fontWeight: 500 }}>Location:</Text>
            <Text style={{ color: "#C7C5CD" }}>{task.location}</Text>
          </View>
          <View style={styles.task_l_loca}>
            <Ionicons name="document-text" size={20} color="#41C97C" />
            <Text style={{ color: "#41C97C", fontWeight: 500 }}>Note: </Text>
            <Text style={{ color: "#C7C5CD" }}>{task.note}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.task_r}>
          <Ionicons
            style={styles.searchIcon_lookup}
            name="close-circle-outline"
            size={36}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    );
  else
    return (
      <View style={styles.task1}>
        <TouchableOpacity
          style={styles.task_l}
          onPress={() => navigation.navigate("Edit task", { task })}
        >
          <View style={styles.task_l_name}>
            <Text style={{ fontSize: 24 }}>{task.title}</Text>
          </View>
          <View style={styles.task_l_loca}>
            <Ionicons name="location" size={20} color="#248DDE" />
            <Text style={{ color: "#248DDE", fontWeight: 500 }}>
              Location:{" "}
            </Text>
            <Text style={{ color: "#C7C5CD" }}>{task.location}</Text>
          </View>
          <View style={styles.task_l_loca}>
            <Ionicons name="document-text" size={20} color="#41C97C" />
            <Text style={{ color: "#41C97C", fontWeight: 500 }}>Note: </Text>
            <Text style={{ color: "#C7C5CD" }}>{task.note}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.task_r}
          onPress={() => {
            handOnDelete(task._id, navigation);
          }}
        >
          <Ionicons
            style={styles.searchIcon_lookup}
            name="close-circle-outline"
            size={36}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    );
};

export default function Today({ navigation }) {
  const [tasks, settasks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getalltask();
      settasks(data);
    }
    const interval = setInterval(async () => fetchData(), 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <View style={styles.head_title}>
            <View style={styles.head_title_top}>
              <Text style={{ fontSize: 56, fontWeight: 500 }}>Today</Text>
            </View>
            <View style={styles.head_title_bot}>
              <Text style={{ fontSize: 22, color: "#C7C5CD" }}>
                {formattedDate}
              </Text>
            </View>
          </View>
          <View style={styles.head_icon}>
            <Ionicons name="apps-sharp" size={40} color="#000" />
          </View>
        </View>
        <View style={styles.tasks}>
          {tasks.map((task, index) => {
            return (
              <Task task={task} navigation={navigation} key={index}></Task>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.add}>
        <TouchableOpacity onPress={() => navigation.navigate("New task", {})}>
          <Ionicons name="add-circle-outline" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16 + StatusBar.currentHeight,
  },

  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
  },

  tasks: {
    marginTop: 48,
    marginHorizontal: 16,
  },

  task1: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 16,
    justifyContent: "space-between",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  task2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9E3E3",
    marginBottom: 16,
    justifyContent: "space-between",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  task_r: {
    marginEnd: 16,
  },

  task_l: {
    margin: 16,
  },

  task_l_loca: {
    flexDirection: "row",
    width: "80%",
    paddingTop: 8,
  },

  add: {
    position: "absolute",
    bottom: 32,
    right: 32,
    height: 60,
    width: 60,
    paddingStart: 1,
    backgroundColor: "#FDE1EB",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E27A9C",
  },
});
