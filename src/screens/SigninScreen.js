import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";


const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={Styles.container}>
            <NavigationEvents
                onWillBlur={ clearErrorMessage }
            />

            <AuthForm
                headerTitle="Sign In on Tracker"
                errorMessage={state.errorMessage}
                // onSubmit={({email, password}) => signup({email, password})} //Same Result as the line bellow
                onSubmit={ signin }
                submitLabel="Sign in"
            />

            <NavLink
                text="Don't have an account. Sign up in instead."
                routeName="Signup"
            />

        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const Styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 5,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;
