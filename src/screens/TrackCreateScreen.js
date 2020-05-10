// import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, withNavigationFocus} from "react-navigation";
import {Text} from "react-native-elements";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);

    const callback = useCallback(
    (location) => {
        addLocation(location, recording)
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Spacer>
                <Text h3>Create a New Track</Text>
            </Spacer>
            <Map/>
            {err ? <Text h3>Please enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}


const Styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
