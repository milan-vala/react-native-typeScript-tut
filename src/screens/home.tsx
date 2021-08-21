import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../components";
import firebase from "firebase";

const App: React.FunctionComponent = (props) => {

    const signOut = () => {
        firebase.auth().signOut().then(() => alert("loged out"));
    }

    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})