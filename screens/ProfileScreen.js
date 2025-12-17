import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  const [firstName, setFirstName] = useState("");

  return (
    <View style={{ flex: 1 }}>

      {/* SCROLLABLE FORM */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 160 }}
        showsVerticalScrollIndicator={false}
      >

        {/* CODE NAME */}
        <View style={styles.row}>
          <Text style={styles.label}>Code</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* FIRST NAME */}
        <View style={styles.row}>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* LAST NAME */}
        <View style={styles.row}>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* NAME */}
        <View style={styles.row}>
          <Text style={styles.label}>Name (English)</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* MOBILE */}
        <View style={styles.row}>
          <Text style={styles.label}>Mobile</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* EMAIL */}
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>
        {/* EMAIL */}
        <View style={styles.row}>
          <Text style={styles.label}>Milk type</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>
        {/* BANK NAME */}
        <View style={styles.row}>
          <Text style={styles.label}>Bank Name</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* BANK BRANCH */}
        <View style={styles.row}>
          <Text style={styles.label}>Bank Branch</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* ACCOUNT NO */}
        <View style={styles.row}>
          <Text style={styles.label}>Account No</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

        {/* IFSC CODE */}
        <View style={styles.row}>
          <Text style={styles.label}>IFSC Code</Text>
          <Text style={styles.sep}>|</Text>

          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#999"
            caretColor="red"
          />
        </View>

      </ScrollView>

      {/* FIXED BOTTOM BUTTONS */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.leftBtn}>
          <Text style={styles.leftBtnText}>CANCEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rightBtn}>
          <Text style={styles.rightBtnText}>SAVE</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
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
  },

  rightBtn: {
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
});
