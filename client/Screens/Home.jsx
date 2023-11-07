import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import {} from "react-native-gesture-handler";

import { Welcome } from "../Components";
import styles from "./home.style";
import Carousel from "../Components/Home/Carousel";
import Headings from "../Components/Home/Heading";
import ProductRow from "../Components/Products/ProductRow";
import LoadingIndicator from "../Components/Loading/LoadingIndicator";
import { SIZES } from "../constants";

const Home = () => {
  const isLoading = false;

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Shanghai China</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          paddingBottom: SIZES.large,
        }}
      >
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
        <Headings title="New Collections" />
        <ProductRow />
        <Headings title="Popular" />
        <ProductRow />
        <Headings title="" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
