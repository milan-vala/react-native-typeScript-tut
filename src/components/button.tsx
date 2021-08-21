import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const { height, width } = Dimensions.get("screen");

interface Props {
    title: string;
    onPress: () => void;
}

const App: React.FunctionComponent<Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,
    },
    text: {
        color: "#fff",
    },
});