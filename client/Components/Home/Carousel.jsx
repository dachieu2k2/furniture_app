import { View, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    require("../../assets/images/fn1.jpg"),
    require("../../assets/images/fn2.jpg"),
    require("../../assets/images/fn3.jpg"),
    require("../../assets/images/fn4.jpg"),
    require("../../assets/images/fn5.jpg"),
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotCOlor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay={true}
        circleLoop
      />
    </View>
  );
};
export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
