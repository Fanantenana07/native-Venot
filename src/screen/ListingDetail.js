import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import colors from "../configs/colors";
import AppText from "../components/AppText";
// const item = {
//   image: require("../assets/profil.png"),
//   title: "Fanantenana Raeken",
//   subtitle: "fh.fanantenana@gmail.com",
// };
export default function ListingDetail({ route }) {
  const list = route.params;
  return (
      <View style={styles.description}>
        <AppText style={styles.header}>Matricule : {list.matricule}</AppText>
        <AppText style={styles.header}>Nom: {list.nom}</AppText>
        <AppText style={styles.header}>
          Taux Horaire: {list.tauxHoraire}
        </AppText>
        <AppText style={styles.header}>
          Nombre d'heure : {list.nbHeure}
        </AppText>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 3,
    paddingHorizontal: 17,
  },
  description: {
    padding: 10,
  },
  header: {
    fontSize: 16,
    color: colors.warning,
    marginBottom: 5,
  },
});
