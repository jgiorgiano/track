import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from "react-navigation";
import {Button} from 'react-native-elements';
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const AccountScreen = () => {

    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>
                <Text style={{fontSize: 38}}> Account Screen </Text>
            </Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
        </SafeAreaView>
    )
};

const Styles = StyleSheet.create({});

export default AccountScreen;
