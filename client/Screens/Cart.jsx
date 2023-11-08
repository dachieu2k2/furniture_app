import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { SIZES, COLORS } from "../constants";
import ProductTitle from "../Components/Cart/ProductTitle";
import styles from "./cart.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../Components/Contexts/CartContext.jsx";
import Button from "../Components/Button.jsx";
import { AuthContext } from "../Components/Contexts/AuthContext.jsx";

const Cart = ({ navigation }) => {
  // console.log("Cart items", items);
  const { profile } = useContext(AuthContext);
  const { items } = useContext(CartContext);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (items.totalCount === 0) {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.upperRow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="chevron-back-circle"
                  size={30}
                  color={COLORS.white}
                />
              </TouchableOpacity>
              <Text style={styles.heading}>Cart</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: SIZES.xxLarge,
                  justifyContent: "center",
                  marginVertical: "50%",
                }}
              >
                Empty!!!
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back-circle"
                size={30}
                color={COLORS.white}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>Cart</Text>
          </View>
          <View
            style={{
              paddingTop: SIZES.xxLarge,
            }}
          >
            <FlatList
              data={items.items}
              keyExtractor={(item) => item.item._id}
              renderItem={({ item }) => <ProductTitle data={item} />}
              style={{ marginHorizontal: 12 }}
            />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              // width: SIZES.width,
              flexDirection: "row",
              marginHorizontal: 12,
              padding: SIZES.xSmall,
            }}
          >
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: SIZES.medium,
                color: COLORS.primary,
                marginLeft: 5,
              }}
            >
              Products Fee:
            </Text>
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: SIZES.medium,
                color: COLORS.primary,
                marginLeft: 5,
              }}
            >
              {"$" + items.total}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              // width: SIZES.width,
              flexDirection: "row",
              marginHorizontal: 12,
              padding: SIZES.xSmall,
            }}
          >
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: SIZES.medium,
                color: COLORS.primary,
                marginLeft: 5,
              }}
            >
              Delivery Fee:
            </Text>
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: SIZES.medium,
                color: COLORS.primary,
                marginLeft: 5,
              }}
            >
              0
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              // width: SIZES.width,
              flexDirection: "row",
              marginHorizontal: 12,
              padding: SIZES.xSmall,
            }}
          >
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: SIZES.large,
                color: COLORS.primary,
                marginLeft: 5,
              }}
            >
              Total:
            </Text>
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: SIZES.large,
                color: COLORS.primary,
                marginLeft: 5,
              }}
            >
              {"$" + items.total}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              // await saveData(item, starCount);
              // setStarCount(1);
              // navigation.navigate("Cart", { items: items.items });
              console.log("Buy");
            }}
            style={styles.cartBtn}
          >
            <Text
              style={styles.cartTitle}
              onPress={() => {
                if (profile._id === "unknow") {
                  toggleModal();
                } else {
                  navigation.navigate("Checkout");
                }
              }}
            >
              Checkout Now!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
          >
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: COLORS.lightWhite,
                borderRadius: 4,
                padding: SIZES.xSmall,
              }}
            >
              <Text
                style={{
                  color: COLORS.black,
                  fontFamily: "semiBold",
                  fontSize: SIZES.medium,
                  alignContent: "center",
                }}
              >
                Opp!!!! You must be logged in!
              </Text>
              {/* <Button title="Hide modal" onPress={toggleModal} /> */}
              <Button
                title="Login"
                filled
                style={{
                  marginTop: 18,
                  marginBottom: 4,
                }}
                onPress={() => navigation.navigate("Welcome")}
              />
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Cart;
