import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, SignUp } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const AuthStack: React.FunctionComponent = () => {
    return (
        // <Navigator> // with header
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="signup" component={SignUp} />
            <Screen name="login" component={Login} />
        </Navigator>
    )
}

export default AuthStack;