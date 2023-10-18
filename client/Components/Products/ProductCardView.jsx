import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./productCardView.style";
import { COLORS, SIZES } from "../../constants";

const ProductCardView = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://assets.wfcdn.com/im/60325268/c_crop_resize_zoom-h624-w900%5Ecompr-r85/2172/217254183/default_name.jpg",
            }}
            style={styles.image}
          />
        </View>

        {/* Text */}
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {" "}
            Product asdasdadasd
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {" "}
            Product
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            {" "}
            $2353
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCardView;
