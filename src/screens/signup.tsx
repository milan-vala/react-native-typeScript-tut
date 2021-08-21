import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Input, Button } from "../components";
import firebase from "firebase";

const App: React.FunctionComponent = (props) => {

    const [name, setName] = React.useState<string | null>(null);
    const [email, setEmail] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);

    const signup = async () => {
        if (name && email && password) {
            try {
                const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
                // console.log("user --->", user);
                if (user) {
                    await firebase.firestore()
                        .collection("users")
                        .doc(user.uid)
                        .set({ name, email, password });
                }
            } catch (error) {
                console.log("error while signup ->", error);
            }
        } else {
            Alert.alert("Error", "Missing Fields.");
        }
    };

    return (
        <View style={styles.container}>
            <Text>Sign up screen</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)} />
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />

            <Button title="Sign up" onPress={signup} />

            <View style={styles.loginText}>
                <Text style={{ marginHorizontal: 5 }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("login")} style={{ marginHorizontal: 5 }}>
                    <Text style={{ color: "rgba(81, 135, 200, 1)" }}>Login here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        flexDirection: "row",
        marginVertical: 20,
    },
})