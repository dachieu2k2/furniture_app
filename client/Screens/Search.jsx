import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Text,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";

import styles from "./search.style";
import { COLORS, SIZES } from "../constants";
import { useDebounce, useProductsSearch } from "../Components/Api";
import { LoadingIndicator } from "../Components/Loading/LoadingIndicator";
import { ErrorMessage } from "../Components/Loading/ErrorMessage";
import SearchTitle from "../Components/Products/SearchTitle";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const debouncedValue = useDebounce(searchKey, 1000);

  const { data, error, isLoading } = useProductsSearch(debouncedValue);

  if (isLoading) {
    <LoadingIndicator />;
  }
  if (error) return <ErrorMessage message={error.message}></ErrorMessage>;
  if (!data) {
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../assets/images/Pose23.png")}
        style={styles.searchImage}
      />
    </View>;
  }
  console.log(data);

  return (
    <SafeAreaView>
      {/* Search */}
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={(text) => setSearchKey(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {data.length === 0 ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <SearchTitle item={item} />}
            style={{ marginHorizontal: 12 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default Search;
