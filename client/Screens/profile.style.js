import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Để hình ảnh tròn
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 10,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  userInfoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  userInfoText: {
    fontSize: 16,
  },
});

export default styles;
