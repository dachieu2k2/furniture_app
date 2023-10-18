import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./heading.style";
import { COLORS, SIZES } from "../../constants";

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Headings;
