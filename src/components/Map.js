import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let point = [];

    return <MapView
        style={Styles.map}
        initialRegion={{
            latitude: 37.33233,
            longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        {/*<Polyline coordinates={} />*/}
    </MapView>
};


const Styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;
