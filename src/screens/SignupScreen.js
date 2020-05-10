import React, {useContext} from 'react';
import {View, StyleSheet } from 'react-native';
import { NavigationEvents} from "react-navigation";
import { Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={Styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerTitle="Sign Up Tracker"
                errorMessage={state.errorMessage}
                // onSubmit={({email, password}) => signup({email, password})} //Same Result as the line bellow
                onSubmit={ signup }
                submitLabel="Sign Up"
            />

            <NavLink
                text="Already have an account? Sign in instead. Continue on lesson 211"
                routeName="Signin"
            />

        </View>
    );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
