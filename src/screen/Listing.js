import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  Alert,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import Card from "../components/Card";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../configs/colors";
import { useState } from "react";
import axios from "axios";
import { url } from "../configs/endpoint";
import AppText from "../components/AppText";
import { Badge } from "react-native-elements";
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
    nom: "vstfsrthsrdthsrt",
    tauxHoraire: 10,
    nbHeure: 45,
  },
  {
    id: 3,
    matricule: "",
    nom: "azeazezefzefze",
    tauxHoraire: 10,
    nbHeure: 45,
  },
];

const Listing = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [prestation, setPrestation] = useState({
    minPrest: null,
    maxPrest: null,
    totalPrest: null,
  });
  const getAllProf = async () => {
    try {
      const response = await axios.get(url + "/profs");
      setEmployees(response.data.professors);
      if (response.data.professors .length > 0){
         setPrestation({
           minPrest: response.data.minPrestation,
           maxPrest: response.data.maxPrestation,
           totalPrest: response.data.totalPrestation,
         });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSuccess = () => {
    // Update data or re-fetch data
    getAllProf();
  };
  useEffect(() => {
    getAllProf();
  }, []);
  const handleUpdate = (item) => {
    // Handle update functionality
    navigation.navigate("UpdateProf", { item, onSuccess: handleSuccess });
  };

  const handleDelete = (item) => {
    // Implement delete logic
    try {
      axios.delete(url + "/profs/" + item.id);
      getAllProf()
    } catch (error) {
      console.log(error);
    }
  };

  const renderRightActions = (item) => {
    return (
      <View style={styles.rightActionsContainer}>
        <TouchableOpacity onPress={() => handleUpdate(item)}>
          <Text style={styles.updateButton}> Update </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item)}>
          <Text style={styles.deleteButton}> Delete </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true); // Set refreshing to true when the user pulls down to refresh
    getAllProf(); // Fetch data when refreshing
    setRefreshing(false);
  };
  console.log(prestation)
  return (
    <>
      <View
        style={{
          paddingHorizontal: 32,
          paddingVertical: 16,
          backgroundColor: colors.secondary,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.white }}>
          Prestation
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 12,
          }}
        >
          {prestation.minPrest && (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                {prestation.minPrest}
              </Text>
              <Text style={{ color: colors.danger }}>min</Text>
            </View>
          )}
          {prestation.maxPrest && (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                {prestation.maxPrest}
              </Text>
              <Text style={{ color: colors.primary }}>max</Text>
            </View>
          )}
          {prestation.totalPrest && (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                {prestation.totalPrest}
              </Text>
              <Text t style={{ color: colors.warning }}>
                total
              </Text>
            </View>
          )}
        </View>
      </View>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            key={item.id}
            onPress={() => navigation.navigate("ListingDetail", item)}
            matricule={item.matricule}
            nom={item.nom}
            tauxHoraire={item.tauxHoraire}
            nbHeure={item.nbHeure}
            renderRightActions={() => renderRightActions(item)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  rightActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    maxWidth: 175,
  },
  updateButton: {
    backgroundColor: colors.primary,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: colors.warning,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Listing;
