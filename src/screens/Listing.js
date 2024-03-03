import { StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Card from "../components/Card";
const data = [
  {
    id: 1,
    matricule: "",
    nom: "gzegzeg",
    tauxHoraire: 10,
    nbHeure: 45,
  },
  {
    id: 2,
    matricule: "",
    nom: "gzegzeg",
    tauxHoraire: 10,
    nbHeure: 45,
  },
  {
    id: 3,
    matricule: "",
    nom: "gzegzeg",
    tauxHoraire: 10,
    nbHeure: 45,
  },
];
const Listing = ({ navigation }) => {
  // useEffect(() => {

  // }, []);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Card
          onPress={() => navigation.navigate("ListingDetail", item)}
          matricule={item.matricule}
          nom={item.nom}
          tauxHoraire={item.tauxHoraire}
          nbHeure={item.nbHeure}
        />
      )}
    ></FlatList>
  );
};

export default Listing;
