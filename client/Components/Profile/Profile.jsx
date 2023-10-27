import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SimpleLineIcons,
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

import styles from "./profile.style";
import { COLORS, SIZES } from "../../constants";

const Profile = () => {
  const navigation = useNavigation();
  const [starCount, setStarCount] = useState(4);

  const increment = () => {
    setStarCount((starCount) => starCount + 1);
  };
  const decrement = () => {
    setStarCount((starCount) => starCount - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://www.bria.com.ph/wp-content/uploads/2022/07/Wooden-Furniture-Pieces.png",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$660.88</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name="star" key={index} size={24} color={"gold"} />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{starCount}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Description</Text>
        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni odio
          quae perspiciatis voluptatibus deleniti quo minima id cumque aliquam.
          Ipsum voluptatibus sequi quae ullam quaerat non similique nostrum.
          Hic, vero.
        </Text>
      </View>
      <View style={{ marginBottom: SIZES.small }}>
        <View style={styles.location}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Ionicons name="location-outline" size={20} />
            <Text>Ha Noi</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
            <Text>Free Delivery</Text>
          </View>
        </View>

        {/* Cart */}
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Let's Buy It Now!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>

      {/* <Text>Product Details</Text> */}
    </View>
  );
};
export default Profile;
