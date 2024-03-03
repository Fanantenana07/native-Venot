import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
// const item = {
//   image: require("../assets/profil.png"),
//   title: "Fanantenana Raeken",
//   subtitle: "fh.fanantenana@gmail.com",
// };
export default function ListingDetail({ route }) {
  const list = route.params;
  return (
    <View>
      <Card
        matricule={list.matricule}
        nom={list.nom}
        tauxHoraire={list.tauxHoraire}
        nbHeure={list.nbHeure}
      />
      {/* <Profile item={item} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
