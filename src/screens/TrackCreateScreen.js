import React from 'react';
import {StyleSheet} from 'react-native';
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3> Track Create Screen </Text>
            <Text h3> Continue on 221</Text>
            <Map />
        </SafeAreaView>
    );
};


const Styles = StyleSheet.create({});

export default TrackCreateScreen;
