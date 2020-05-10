import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from "../components/Spacer";
import {withNavigation} from "react-navigation";

const NavLink = ({navigation, text, routeName}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={Styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    link: {
        color: 'blue',
        alignSelf: 'center'
    }
});

export default withNavigation(NavLink);
