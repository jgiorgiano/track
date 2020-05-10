import React, {useContext} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {NavigationEvents} from "react-navigation";
import {Context as TrackContext} from '../context/TrackContext';
import {FontAwesome} from "@expo/vector-icons";


const TrackListScreen = ({navigation}) => {

    const {state, fetchTracks} = useContext(TrackContext);

    return <>
        <NavigationEvents onWillFocus={() => fetchTracks()}/>
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => {navigation.navigate('TrackDetail', {_id: item._id})}}>
                    <ListItem chevron={true} title={item.name}/>
                  </TouchableOpacity>
                );
            }}
        />

    </>;
};

TrackListScreen.navigationOptions = {
    title: 'Tracks',
}


const Styles = StyleSheet.create({});

export default TrackListScreen;
