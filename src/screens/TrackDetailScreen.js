import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {Context as TrackContext} from '../context/TrackContext';
import Spacer from "../components/Spacer";
import MapView, { Polyline } from 'react-native-maps';


const TrackDetailScreen = ({navigation}) => {
    const _id = navigation.getParam('_id');

    const {state} = useContext(TrackContext);

    const track = state.find(trackItem => trackItem._id === _id);

    const initialCoords = track.locations[0].coords;

    return <>
        <Spacer>
            <Text h3>{track.name}</Text>
        </Spacer>
        <MapView
            initialRegion={{
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
                ...initialCoords
            }}
            style={Styles.map}>
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
        </>
};


const Styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;
