import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions, StyleSheet, View } from "react-native";

const { height, width } = Dimensions.get("screen");

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input: React.FunctionComponent<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry || false}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: "center",
        backgroundColor: "#e3e3e3",
        borderRadius: 5,
        marginVertical: 10,
    },
    input: {
        padding: 15,
    },
});