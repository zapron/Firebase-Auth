import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, {useEffect, useState} from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebase"
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
const [email,setEmail] = useState('')
const [pass,setPass] = useState('')

const navigation = useNavigation()

useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(
        user => {
            if(user){
                navigation.replace("Home")
            }
        }
    )
    return unsubscribe
},[])

function handleSignUp(){
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email,pass)
    .then(userCredentials =>{
        const user = userCredentials.user;
        console.log(`Registered with`, user.email)
    })
    .catch(error => alert(error.message))
}

function handleLogin(){
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email,pass)
    .then(userCredentials =>{
        const user = userCredentials.user;
        console.log(`Logged in with`, user.email)
    })
    .catch(error => alert(error.message))
}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={email=>setEmail(email)}></TextInput>
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={pass}
          onChangeText={pass=>setPass(pass)}
          secureTextEntry 
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems:"center"
  },
  buttonOutline: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    borderColor:"#0782f9",
    borderWidth:2
  },
  buttonText:{color:"white", fontWeight:"700"},
  buttonOutlineText: {
    color:"#0782f9",
    fontWeight:"700"
  },
});
