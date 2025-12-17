import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SendSMS from "react-native-sms";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const menuItems = [
  { id: 1, title: "Collection", icon: "bottle-soda", screen: "Home" },
  { id: 2, title: "Customer", icon: "account-group", screen: "Profile" },
  { id: 9, title: "Rate Chart", icon: "table", screen: "RateChart" }
];

export default function HomeScreen({ navigation }) {

  const mobNumber = useRef("");
  const msgContent = useRef("");

  const sendSMS = () => {
    console.log(mobNumber.current);
    console.log(msgContent.current);
    console.log("SendSMS:", SendSMS);
    SendSMS.send(
      {
        body: msgContent,
        recipients: [mobNumber], // mobile number
        successTypes: ["sent", "queued"]
      },
      (completed, cancelled, error) => {
        if (completed) {
          Alert.alert("SMS Sent Successfully");
        } else if (cancelled) {
          Alert.alert("SMS Cancelled");
        } else if (error) {
          Alert.alert("Failed to send SMS");
        }
      }
    );

  }

  const handleMobile = (mob) => {
    mobNumber.current = mob;
  };
  const handleMessage = (msg) => {
    msgContent.current = msg;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sms Sender</Text>
      <Text style={styles.routeText}>
        @E-Block Coder
      </Text>

      {/* LAST NAME */}
      <View style={styles.row}>
        <Text style={styles.label}>Mobile Number</Text>
        <Text style={styles.sep}>|</Text>

        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#999"
          caretColor="red"
          onChangeText={handleMobile}
        />
      </View>

      {/* NAME */}
      <View style={styles.row}>
        <Text style={styles.label}>Message</Text>
        <Text style={styles.sep}>|</Text>

        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#999"
          caretColor="red"
          onChangeText={handleMessage}
        />
      </View>

      {/* FIXED BOTTOM BUTTONS */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.rightBtn}>
          <Text style={styles.rightBtnText} onPress={sendSMS}>SAVE</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#fff",
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#d70654"
  },

  routeText: {
    textAlign: "center",
    color: "#141414ff",
    fontSize: 13,
    marginBottom: 14,
  },
  bottomButtons: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
  },

  leftBtn: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    paddingVertical: 18,
    alignItems: "center",
  },

  leftBtnText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  }, rightBtn: {
    flex: 1,
    backgroundColor: "#d70654",
    paddingVertical: 18,
    alignItems: "center",
  },

  rightBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 14,
    marginBottom: 4,
  },

  label: {
    width: 110,
    color: "#999",
  },
  sep: {
    fontSize: 18,
    color: "#ccc",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    outlineStyle: "none",
  },


});
