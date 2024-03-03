import { View, StyleSheet, Image } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import AppInputForm from "../components/AppInputForm";
import CustomButton from "../components/CustomButton";
import colors from "../configs/colors";

// const endPoint = "http://192.168.43.55:3000/";
const ProductSchema = Yup.object().shape({
  matricule: Yup.string().required("Ce champs est requis").label("Matricule"),
  nom: Yup.number().required("Ce champs est requis").min(0).label("Nom"),
  tauxHoraire: Yup.number()
    .min(0)
    .required("Ce champs est requis")
    .label("Taux HOraire"),
  nbHeure: Yup.number()
    .required("Ce champs est requis")
    .min(0)
    .label("Nombre d'heure"),
});

const initialState = {
  matricule: "",
  nom: "",
  tauxHoraire: -1,
  nbHeure: -1,
};

const NewProduct = () => {
  const onSubmit = async (values) => {
    // const data = new FormData();
    // data.append("name", values.name);
    // data.append("number", values.number);
    // data.append("name", values.category);
    // values.images.forEach((element, index) => {
    //   data.append("images", {
    //     name: "image" + index,
    //     type: "image/jpg",
    //     uri: element,
    //   });
    // });
    // try {
    //   console.log("entryyyyy");
    //   const response = await axios.post(
    //     `http://192.168.43.55:3000/listing/new`,
    //     data,
    //     { headers: { "Content-Type": "multipart/form-data" } }
    //   );
    //   console.log(response.status);
    // } catch (error) {
    //   console.log(error.response);
    // }
  };
  return (
    <View style={{ padding: 5, flex: 1 }}>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={ProductSchema}
      >
        {({ handleSubmit, errors }) => {
          return (
            <View>
              {/* <AppProfile
                image={require("../assets/box.png")}
                title={"New Product"}
              /> */}
              <AppInputForm
                name={"matricule"}
                icon={"rhombus"}
                placeholder={"matricule"}
              />
              <AppInputForm name={"nom"} icon={"truck"} placeholder={"nom"} />
              <AppInputForm
                name={"tauxHoraire"}
                keyboardType={"numeric"}
                icon={"truck"}
                placeholder={"tauxHoraire"}
              />
              <AppInputForm
                name={"nbHeure"}
                keyboardType={"numeric"}
                icon={"truck"}
                placeholder={"nbHeure"}
              />
              <CustomButton
                style={styles.button}
                title={"Submit"}
                onPress={handleSubmit}
              />
            </View>
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

export default NewProduct;
