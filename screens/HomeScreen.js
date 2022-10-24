import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation()

    function handleSignout(){
        auth.signOut().then(()=>{
            console.log("logged out")
            navigation.replace("Login")
        }).catch(error=>alert(error.message))
    }
  return (
    <View style = {styles.container}>
<Text>
    Email:{auth.currentUser?.email}
</Text>
<TouchableOpacity style = {styles.button} onPress={handleSignout}>
<Text style={styles.buttonText}>Signout</Text>
</TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{color:"white", fontWeight:"700"},
    button: {
        backgroundColor: "#0782f9",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems:"center",
        marginTop:40
      },
});
