import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from 'firebase/app'
import AppStack from "./appstack";
import AuthStack from "./authstack";
require('firebase/auth')

const MainNav: React.FunctionComponent = () => {
    const [user, setUser] = React.useState<any>(null);

    const bootstrap = () => {
        firebase.auth().onAuthStateChanged(_user => {
            if (_user) {
                setUser(_user);
            }
        })
    }

    React.useEffect(() => {
        bootstrap();
    }, []);

    return (
        <NavigationContainer>
            {user !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNav;