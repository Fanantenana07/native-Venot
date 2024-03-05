import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import AppText from "./AppText";
import colors from "../configs/colors";
import Screen from "./Screen";

export default function Card({
  matricule,
  nom,
  tauxHoraire,
  nbHeure,
  onPress,
  renderRightActions,
}) {
  console.log(matricule,nom,tauxHoraire)
  return (
    <Screen>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light_gray} onPress={onPress}>
          <View style={styles.container}>
            <View style={styles.description}>
              <AppText style={styles.header}>Matricule: {matricule}</AppText>
              <AppText style={styles.header}>Nom: {nom}</AppText>
              <AppText style={styles.header}>
                Taux Horaire: {tauxHoraire}
              </AppText>
              <AppText style={styles.header}>
                Nombre d'heure : {nbHeure}
              </AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    paddingHorizontal:17,
  },
  description: {
    padding: 10,
  },
  header: {
    fontSize: 16,
    color: colors.secondary,
  },
});
