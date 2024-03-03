import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../configs/colors";

export default function Card({
  matricule,
  nom,
  tauxHoraire,
  nbHeure,
  onPress,
}) {
  return (
    <TouchableHighlight underlayColor={colors.light_gray} onPress={onPress}>
      <View>
        {/* <View style={styles.container}>
          <Image style={styles.image} source={image} />
        </View> */}
        <View style={styles.description}>
          <View style={styles.containerDescription}>
            <AppText style={styles.header}>{matricule}</AppText>
            <AppText style={styles.header}>{nom}</AppText>
            <AppText style={styles.header}>{tauxHoraire}</AppText>
            <AppText style={styles.header}>{nbHeure}</AppText>
            {/* <View style={styles.date}>
              <AppText style={styles.textTitle}>
                Nmber in Stock : {number}
              </AppText>
            </View> */}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    opacity: 0.7,
  },
  container: {
    width: "100%",
    height: 200,
  },
  profile: {
    marginTop: "2%",
  },
  date: {
    flexDirection: "row",
    alignContent: "center",
    padding: 2,
  },
  dateText: {
    color: colors.muted,
  },
  containerDescription: {
    padding: 8,
  },
  header: {
    fontSize: 16,
    color: colors.warning,

    // marginVertical: 10,
  },
  textTitle: {
    marginVertical: 3,
    color: colors.muted,
  },
  description: {
    padding: 10,
  },
});
