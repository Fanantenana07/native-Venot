import { View, StyleSheet, Image } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import AppInputForm from "../components/AppInputForm";
import CustomButton from "../components/CustomButton";
import colors from "../configs/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import axios from "axios";
import { url } from "../configs/endpoint";
const ProfesseurSchema = Yup.object().shape({
  matricule: Yup.string().required("Ce champs est requis").label("Matricule"),
  nom: Yup.string().required("Ce champs est requis").min(0).label("Nom"),
  tauxHoraire: Yup.number()
    .min(1)
    .required("Ce champs est requis")
    .label("Taux HOraire"),
  nbHeure: Yup.number()
    .required("Ce champs est requis")
    .min(1)
    .label("Nombre d'heure"),
});

const initialState = {
  matricule: "",
  nom: "",
  tauxHoraire: parseInt(0).toString(),
  nbHeure: parseInt(0).toString(),
};

const CreareProfessor = ({ navigation }) => {
  const onSubmit = async (values,  resetForm ) => {
    try {
      const response = await axios.post(url + "/profs", values);
       resetForm(); 
     navigation.navigate("Listing");
      if (route.params && route.params.onSuccess) {
        route.params.onSuccess(); // Call the callback function passed from Listing screen
      }
      
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <View style={{ padding: 5, flex: 1 }}>
      <Formik
        initialValues={initialState}
        onSubmit={(values,{resetForm}) => onSubmit(values,resetForm)}
        validationSchema={ProfesseurSchema}
      >
        {({ handleSubmit, errors }) => {
          return (
            <Screen>
              <AppText>Create new Prof</AppText>
              <AppInputForm
                name={"matricule"}
                icon={"rhombus"}
                placeholder={"matricule"}
              />
              <AppInputForm name={"nom"} icon={"rhombus"} placeholder={"nom"} />
              <AppInputForm
                name={"tauxHoraire"}
                keyboardType={"numeric"}
                icon={"clock"}
                placeholder={"tauxHoraire"}
              />
              <AppInputForm
                name={"nbHeure"}
                keyboardType={"numeric"}
                icon={"clock"}
                placeholder={"nombre d'heure"}
              />
              <CustomButton
                style={styles.button}
                title={"Submit"}
                onPress={handleSubmit}
              />
            </Screen>
          );
        }}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    color: colors.primary,
    fontSize: 35,
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default CreareProfessor;
